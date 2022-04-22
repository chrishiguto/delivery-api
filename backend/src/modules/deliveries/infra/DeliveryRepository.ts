import { PrismaClient } from "@prisma/client";
import { prisma } from "../../../database/prismaClient";
import { ICreateDelivery } from "../useCases/createDeliveries/CreateDeliveryUseCase";
import { IUpdateDeliveryman } from "../useCases/updateDeliveryman/UpdateDeliverymanUseCase";
import { IDeliveryRepository } from "./IDeliveryRepository";

export class DeliveryRepository implements IDeliveryRepository {
  private repository: PrismaClient;

  constructor() {
    this.repository = prisma;
  }

  async create({ id_client, item_name }: ICreateDelivery) {
    const delivery = await this.repository.deliveries.create({
      data: {
        item_name,
        id_client,
      },
    });

    return delivery;
  }

  async findAllAvailable() {
    const deliveries = await this.repository.deliveries.findMany({
      where: {
        end_at: null,
        id_deliveryman: null,
      },
    });

    return deliveries;
  }

  async updateById({ id_delivery, id_deliveryman }: IUpdateDeliveryman) {
    const result = await this.repository.deliveries.update({
      where: {
        id: id_delivery,
      },
      data: {
        id_deliveryman,
      },
    });

    return result;
  }
}
