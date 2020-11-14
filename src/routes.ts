import {Router} from 'express';
import DiscentController from './controllers/DiscentController';

const discentController = new DiscentController();

const routes = Router();

routes.route('/discent')
.get(discentController.read)
.post(discentController.create);

export default routes;