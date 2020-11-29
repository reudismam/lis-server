import express,{ Router } from "express";
import path from 'path';
import multer from 'multer';
import {uuid} from 'uuidv4';
import DiscentController from './controllers/DiscentController';

const discentController:DiscentController = new DiscentController();

const config = multer({
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', 'uploads/'),
        filename(req, file, callback) {
            const fileName = `${uuid()}-${file.originalname}`;
            return callback(null, fileName);
        }
    })
});

const routes = Router();

routes.route('/discent')
.get(discentController.read)
.post(config.single('photo'), discentController.create);

routes.route('/discent/:id')
.put(discentController.update)
.delete(discentController.delete);

routes.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

export default routes;