import {Request, Response} from 'express';

import DiscentDAO from '../dao/DiscentDAO';
import Area from '../models/Area';
import Discent from '../models/Discent';
import Project from '../models/Project';
import Image from '../models/Image';

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
            projects,
            photo
        } = req.body;

        const areasObjs = areas.map((area:string) => {
            return {name: area};
        });

        const image:Image = {image: photo}

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
            projects,
            photo: image
        }
        const discent = await this.discentDAO.create(data);
        return res.status(201).json(discent);
    }

    read = async (req:Request, res:Response) => {
       const discents = await this.discentDAO.read();
       return res.json(discents);
    }

    readById = async (req:Request, res:Response):Promise<Discent> => {
        const {id} = req.params;
        const discent = await this.discentDAO.readById(Number(id));
        return discent;
    }

    update = async (req:Request, res:Response) => {
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
            projects,
            photo
        } = req.body;

        const provideData = {
            name,
            lastname,
            email,
            phone,
            course,
            category,
            occupation,
            degree,
            bio,
            projects,
            photo
        }
        let data = {};
        Object.entries(provideData).forEach((v) => {
            const [key, value] = v;
            if (value) {
                data = {...data, [key]: value}
            }
        });
        let discent = await this.readById(req, res);
        discent = {...discent, ...data};
        await this.discentDAO.create(discent);
        if (areas) {
            const areasObjs: Area[] = this.createOrUpdateArea(areas, discent);
            await this.deleteAreas(discent, areasObjs);
        }
        const updated = await this.readById(req, res);
        res.json(updated);
    }

    private async deleteAreas(discent: Discent, areasObjs: Area[]) {
        const discentAreas: Area[] = discent.areas;
        const toRemove = discentAreas.filter(
            area => !areasObjs.some(areaObj => areaObj.id && areaObj.id == area.id)
        );
        for (let area of toRemove) {
            await this.discentDAO.deleteArea(area);
        };
    }

    private createOrUpdateArea(areas: any, discent: Discent) {
        const areasObjs: Area[] = areas;
        areasObjs.forEach(async (area) => {
            area.discent = discent;
            await this.discentDAO.createArea(area);
        });
        return areasObjs;
    }
}

export default DiscentController;