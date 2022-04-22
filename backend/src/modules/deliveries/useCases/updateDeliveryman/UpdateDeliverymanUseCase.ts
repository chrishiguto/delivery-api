import { inject, injectable } from "tsyringe";
import { prisma } from "../../../../database/prismaClient";
import { IDeliveryRepository } from "../../infra/IDeliveryRepository";

export interface IUpdateDeliveryman {
  id_delivery: string;
  id_deliveryman: string;
}

@injectable()
export class UpdateDeliverymanUseCase {
  constructor(
    @inject("DeliveryRepository")
    private deliveryRepository: IDeliveryRepository
  ) {}

  async execute({ id_delivery, id_deliveryman }: IUpdateDeliveryman) {
    const result = await this.deliveryRepository.updateById({
      id_delivery,
      id_deliveryman,
    });

    return result;
  }
}
