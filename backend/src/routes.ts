import { Router } from "express";
import { ensureAuthenticatedClient } from "./middlewares/ensureAuthenticatedClient";
import { ensureAuthenticatedDeliveryman } from "./middlewares/ensureAuthenticatedDeliveryman";
import { AuthenticateClientController } from "./modules/account/useCases/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { FindAllDeliveriesController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesController";
import { UpdateEndDateController } from "./modules/clients/useCases/updateEndDate/UpdateEndDateController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDeliveries/CreateDeliveryController";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesController";

const routes = Router();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllDeliveriesController = new FindAllDeliveriesController() 
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController()
const updateEndDateController = new UpdateEndDateController()

routes.post("/client", createClientController.handle);
routes.post("/client/auth", authenticateClientController.handle);
routes.get('/client/deliveries', ensureAuthenticatedClient, findAllDeliveriesController.handle)

routes.post("/deliveryman", createDeliverymanController.handle);
routes.post("/deliveryman/auth", authenticateDeliverymanController.handle);
routes.get("/deliveryman/deliveries", ensureAuthenticatedDeliveryman, findAllDeliveriesDeliverymanController.handle);

routes.post(
  "/delivery",
  ensureAuthenticatedClient,
  createDeliveryController.handle
);

routes.get(
  "/delivery/available",
  ensureAuthenticatedDeliveryman,
  findAllAvailableController.handle
);

routes.put(
  "/delivery/update-deliveryman/:id",
  ensureAuthenticatedDeliveryman,
  updateDeliverymanController.handle
);

routes.put(
  "/delivery/finish/:id",
  ensureAuthenticatedDeliveryman,
  updateEndDateController.handle
);

export { routes };
