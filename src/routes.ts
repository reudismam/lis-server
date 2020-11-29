import { Router } from "express";
import DiscentController from './controllers/DiscentController';

const discentController:DiscentController = new DiscentController();

const routes = Router();

routes.route('/discent')
.get(discentController.read)
.post(discentController.create);

routes.route('/discent/:id')
.put(discentController.update)
.delete(discentController.delete);

export default routes;