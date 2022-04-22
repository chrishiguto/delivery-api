import { injectable, inject } from "tsyringe";
import { prisma } from "../../../../database/prismaClient";
import { IClientRepository } from "../../infra/repository/IClientRepository";

@injectable()
export class FindAllDeliveriesUseCase {
    constructor(
        @inject("ClientRepository") private clientRepository: IClientRepository
      ) {}

    async execute(id_client: string) {
        const deliveries = await this.clientRepository.findMany(id_client)

        return deliveries
    }
}