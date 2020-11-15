import {Request, Response} from 'express';

import DiscentDAO from '../dao/DiscentDAO';
import Area from '../models/Area';
import Discent from '../models/Discent';
import Project from '../models/Project';

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
            bio,
            areas,
            projects
        } = req.body;

        const areasObjs = areas.map((area:string) => {
            return {name: area};
        });

        const data: Discent = {
            name,
            lastname,
            email,
            phone,
            course,
            category,
            occupation,
            degree,
            bio,
            areas: areasObjs,
            projects
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