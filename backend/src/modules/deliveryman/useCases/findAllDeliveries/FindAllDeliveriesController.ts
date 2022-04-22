import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllDeliveriesDeliverymanUseCase } from "./FindAllDeliveriesDeliverymanUseCase";

export class FindAllDeliveriesDeliverymanController {
  async handle(req: Request, res: Response) {
    const { id_deliveryman } = req;

    const findAllDeliveriesDeliverymanUseCase = container.resolve(
      FindAllDeliveriesDeliverymanUseCase
    );

    const deliveries = await findAllDeliveriesDeliverymanUseCase.execute(
      id_deliveryman
    );

    return res.json(deliveries);
  }
}
