import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllAvailableUseCase } from "./FindAllAvailableUseCase";

export class FindAllAvailableController {
    async handle(req: Request, res: Response) {
        const findAllAvailableUseCase = container.resolve(FindAllAvailableUseCase)

        const deliveries = await findAllAvailableUseCase.execute()

        return res.json(deliveries)
    }
}