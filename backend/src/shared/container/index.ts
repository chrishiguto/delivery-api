import { container } from 'tsyringe'
import { ClientRepository } from '../../modules/clients/infra/repository/ClientRepository'
import { IClientRepository } from '../../modules/clients/infra/repository/IClientRepository'
import { DeliveryRepository } from '../../modules/deliveries/infra/DeliveryRepository'
import { IDeliveryRepository } from '../../modules/deliveries/infra/IDeliveryRepository'
import { DeliverymanRepository } from '../../modules/deliveryman/infra/DeliverymanRepository'
import { IDeliverymanRepository } from '../../modules/deliveryman/infra/IDeliverymanRepository'

container.registerSingleton<IClientRepository>('ClientRepository', ClientRepository)
container.registerSingleton<IDeliveryRepository>('DeliveryRepository', DeliveryRepository)
container.registerSingleton<IDeliverymanRepository>('DeliverymanRepository', DeliverymanRepository)