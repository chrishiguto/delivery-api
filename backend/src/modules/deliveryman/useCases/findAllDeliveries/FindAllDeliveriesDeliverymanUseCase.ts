import { inject, injectable } from "tsyringe";
import { prisma } from "../../../../database/prismaClient";
import { IDeliverymanRepository } from "../../infra/IDeliverymanRepository";

@injectable()
export class FindAllDeliveriesDeliverymanUseCase {
    constructor(
        @inject('DeliverymanRepository') private deliverymanRepository: IDeliverymanRepository
    ) {}

    async execute(id_deliveryman: string) {
        const deliveries = await this.deliverymanRepository.findAllDeliveriesById(id_deliveryman)

        return deliveries
    }
}