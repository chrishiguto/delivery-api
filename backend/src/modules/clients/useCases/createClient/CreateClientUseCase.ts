import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { IClientRepository } from "../../infra/repository/IClientRepository";

export interface ICreateClient {
  username: string;
  password: string;
}

@injectable()
export class CreateClientUseCase {
  constructor(
    @inject("ClientRepository") private clientRepository: IClientRepository
  ) {}

  async execute({ username, password }: ICreateClient) {
    const clientExists = await this.clientRepository.findFirst(username);

    if (clientExists) {
      throw new Error("Client already exists");
    }

    const hashedPassword = await hash(password, 10);

    const client = await this.clientRepository.create({
      username,
      password: hashedPassword,
    });

    return client;
  }
}
