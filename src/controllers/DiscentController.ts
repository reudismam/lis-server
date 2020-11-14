import {Request, Response} from 'express';
import DiscentDAO from '../DAO/DiscentDAO';
import Discent from '../models/Discent';


class DiscentController {
    discentDAO = new DiscentDAO();
    read = async (req: Request, res: Response) => {
        const discents = await this.discentDAO.read();
        return res.json(discents);
    }

    create = async (req:Request, res:Response) => {
        const {
            name,
            lastname,
            email,
            phone,
            course,
            category,
            occupation,
            degree,
            bio
        } = req.body;

        const data:Discent = {
            name,
            lastname,
            email,
            phone,
            course,
            category,
            occupation,
            degree,
            bio
        }
        const discent = await this.discentDAO.create(data);
        console.log(discent);
        return res.json(discent);
    }
}

export default DiscentController;