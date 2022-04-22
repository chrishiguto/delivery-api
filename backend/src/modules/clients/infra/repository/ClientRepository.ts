import { PrismaClient } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient";
import { ICreateClient } from "../../useCases/createClient/CreateClientUseCase";
import { IUpdateDate } from "../../useCases/updateEndDate/UpdateEndDateUseCase";
import { IClientRepository } from "./IClientRepository";

export class ClientRepository implements IClientRepository {
  private repository: PrismaClient;

  constructor() {
    this.repository = prisma;
  }

  async findFirst(username: string) {
    const client = await this.repository.clients.findFirst({
      where: {
        username: {
          mode: "insensitive",
          equals: username,
        },
      },
    });

    return client;
  }

  async findMany(id_client: string) {
    const deliveries = prisma.clients.findMany({
      where: {
          id: id_client
      },
      select: {
          deliveries: true
      }
  })

    return deliveries;
  }

  async updateDateByDeliveryAndDeliveryman({ id_delivery, id_deliveryman }: IUpdateDate) {
    const result = await prisma.deliveries.updateMany({
      where: {
          id: id_delivery,
          id_deliveryman
      },
      data: {
          end_at: new Date()
      }
    })

    return result
  }

  async create({ username, password }: ICreateClient) {
    const client = await this.repository.clients.create({
      data: {
        username,
        password,
      }
    });

    return client;
  }
}
