import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

export class CreateDeliveryController {
    async handle(req: Request, res: Response) {
        const { item_name } = req.body
        const { id_client } = req

        const createDeliveryUseCase = container.resolve(CreateDeliveryUseCase)

        const delivery = await createDeliveryUseCase.execute({
            item_name,
            id_client
        })

        return res.json(delivery)
    }
}