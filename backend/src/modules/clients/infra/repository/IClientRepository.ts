import { Clients, Deliveries } from "@prisma/client";
import { ICreateClient } from "../../useCases/createClient/CreateClientUseCase";
import { IUpdateDate } from "../../useCases/updateEndDate/UpdateEndDateUseCase";

export interface IClientRepository {
    findFirst(username: string): Promise<Clients | null>
    findMany(id_client: string): Promise<{ deliveries: Deliveries[] }[]>
    updateDateByDeliveryAndDeliveryman(args: IUpdateDate): Promise<any>
    create(args: ICreateClient): Promise<Clients>
}