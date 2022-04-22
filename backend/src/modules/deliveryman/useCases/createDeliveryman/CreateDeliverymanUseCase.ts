import { hash } from "bcrypt"
import { inject, injectable } from "tsyringe"
import { prisma } from "../../../../database/prismaClient"
import { IDeliverymanRepository } from "../../infra/IDeliverymanRepository"


export interface ICreateDeliveryman {
    username: string
    password: string
}

@injectable()
export class CreateDeliverymanUseCase {
    constructor(
        @inject('DeliverymanRepository') private deliverymanRepository: IDeliverymanRepository
    ) {}

    async execute({ username, password }: ICreateDeliveryman) {
        const deliveryManExists = await this.deliverymanRepository.findByUsername(username)

        if (deliveryManExists) {
            throw new Error('Deliveryman already exists')
        }

        const hashedPassword = await hash(password, 10)

        const deliveryman = await this.deliverymanRepository.create({
            username,
            password: hashedPassword
        })

        return deliveryman
    }
}