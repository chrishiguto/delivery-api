import { inject, injectable } from "tsyringe";
import { prisma } from "../../../../database/prismaClient";
import { IDeliveryRepository } from "../../infra/IDeliveryRepository";

export interface ICreateDelivery {
  item_name: string;
  id_client: string;
}

@injectable()
export class CreateDeliveryUseCase {
  constructor(
    @inject("DeliveryRepository")
    private deliveryRepository: IDeliveryRepository
  ) {}

  async execute({ item_name, id_client }: ICreateDelivery) {
    const delivery = await this.deliveryRepository.create({
      item_name,
      id_client,
    });

    return delivery;
  }
}
