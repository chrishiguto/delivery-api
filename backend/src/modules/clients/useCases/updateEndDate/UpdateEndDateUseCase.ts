import { inject, injectable } from "tsyringe";
import { prisma } from "../../../../database/prismaClient";
import { IClientRepository } from "../../infra/repository/IClientRepository";

export interface IUpdateDate {
  id_delivery: string;
  id_deliveryman: string;
}

@injectable()
export class UpdateEndDateUseCase {
  constructor(
    @inject("ClientRepository") private clientRepository: IClientRepository
  ) {}

  async execute({ id_delivery, id_deliveryman }: IUpdateDate) {
    const result =
      await this.clientRepository.updateDateByDeliveryAndDeliveryman({
        id_delivery,
        id_deliveryman,
      });

    return result;
  }
}
