import {  Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";

export class UpdateDeliverymanController {
    async handle(req: Request, res: Response) {
        const { id_deliveryman } = req
        const { id: id_delivery } = req.params

        const updateDeliverymanUseCase = container.resolve(UpdateDeliverymanUseCase)
        const delivery = await updateDeliverymanUseCase.execute({
            id_deliveryman,
            id_delivery
        })

        return res.json(delivery)
    }
}