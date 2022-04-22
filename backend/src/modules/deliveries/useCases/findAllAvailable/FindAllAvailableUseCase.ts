import { inject, injectable } from "tsyringe";
import { prisma } from "../../../../database/prismaClient";
import { IDeliveryRepository } from "../../infra/IDeliveryRepository";

@injectable()
export class FindAllAvailableUseCase {
    constructor(
        @inject('DeliveryRepository') private deliveryRepository: IDeliveryRepository
    ) {}

    async execute() {
        const deliveries = await this.deliveryRepository.findAllAvailable()

        return deliveries
    }
}