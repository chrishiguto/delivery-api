import { Deliveries } from "@prisma/client";
import { ICreateDelivery } from "../useCases/createDeliveries/CreateDeliveryUseCase";
import { IUpdateDeliveryman } from "../useCases/updateDeliveryman/UpdateDeliverymanUseCase";

export interface IDeliveryRepository {
    create({ id_client, item_name }: ICreateDelivery): Promise<Deliveries>
    findAllAvailable(): Promise<Deliveries[]>
    updateById({ id_delivery, id_deliveryman }: IUpdateDeliveryman): Promise<Deliveries>
}