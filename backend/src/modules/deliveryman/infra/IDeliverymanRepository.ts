import { Deliveries, Deliveryman } from "@prisma/client";
import { ICreateDeliveryman } from "../useCases/createDeliveryman/CreateDeliverymanUseCase";

export interface IDeliverymanRepository {
    findByUsername(username: string): Promise<Deliveryman | null>
    create({ username, password }: ICreateDeliveryman): Promise<Deliveryman>
    findAllDeliveriesById(id_deliveryman: string): Promise<{ deliveries: Deliveries[] }[]>
}