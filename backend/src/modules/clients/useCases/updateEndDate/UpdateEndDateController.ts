import { Request, response, Response } from "express";
import { container } from "tsyringe";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";


export class UpdateEndDateController {
    async handle(req: Request, res: Response) {
        const { id_deliveryman } = req
        const { id } = req.params

        const updateEndDateUseCase = container.resolve(UpdateEndDateUseCase)
        
        const result = await updateEndDateUseCase.execute({
            id_delivery: id,
            id_deliveryman
        })

        return res.json(result)
    }
}