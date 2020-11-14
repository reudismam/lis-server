import {Request, Response} from 'express';

import DiscentDAO from '../dao/DiscentDAO';
import Discent from '../models/Discent';

class DiscentController {
    discentDAO: DiscentDAO = new DiscentDAO();

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

        const data: Discent = {
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
        return res.status(201).json(discent);
    }

    read = async (req:Request, res:Response) => {
       const discents = await this.discentDAO.read();
       return res.json(discents);
    }
}

export default DiscentController;