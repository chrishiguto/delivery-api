import { PrismaClient } from "@prisma/client";
import { prisma } from "../../../database/prismaClient";
import { ICreateDeliveryman } from "../useCases/createDeliveryman/CreateDeliverymanUseCase";
import { IDeliverymanRepository } from "./IDeliverymanRepository";

export class DeliverymanRepository implements IDeliverymanRepository {
  private repository: PrismaClient;

  constructor() {
    this.repository = prisma;
  }

  async findByUsername(username: string) {
    const deliverymanExists = await this.repository.deliveryman.findFirst({
      where: {
        username: {
          mode: "insensitive",
          equals: username,
        },
      },
    });

    return deliverymanExists;
  }

  async create({ username, password }: ICreateDeliveryman) {
    const deliveryman = await this.repository.deliveryman.create({
        data: {
            username,
            password
        }
    })

    return deliveryman
  }

  async findAllDeliveriesById(id_deliveryman: string) {
    const deliveries = await this.repository.deliveryman.findMany({
      where: {
          id: id_deliveryman
      },
      select: {
          deliveries: true
      }
  })

  return deliveries
  }
}
