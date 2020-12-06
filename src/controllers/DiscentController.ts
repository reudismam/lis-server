import {Request, Response} from 'express';

import DiscentDAO from '../dao/DiscentDAO';
import AreaDAO from '../dao/AreaDAO';
import Area from '../models/Area';
import Discent from '../models/Discent';
import Project from '../models/Project';
import Image from '../models/Image';

class DiscentController {
    discentDAO: DiscentDAO = new DiscentDAO();
    areaDAO: AreaDAO = new AreaDAO();

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
            publications
        } = req.body;

        if (publications) {
            const publicationsArray = JSON.parse(publications);
            console.log(publicationsArray);
        }

        let areasObjs:Area[] = [];
        if (areas) {
            areasObjs = JSON.parse(areas).map((area:string) => {
                return {name: area};
            });
        }

        let data: Discent = {
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

        const photo = req.file as Express.Multer.File;
        if (photo) {
            let image = {image: photo.filename};
            data = {...data, photo: image}
        }
        const discent = await this.discentDAO.create(data);
        return res.status(201).json(discent);
    }

    read = async (req:Request, res:Response) => {
       const discents = await this.discentDAO.read();
       return res.json(discents);
    }

    readById = async (req:Request, res:Response) => {
        const {id} = req.params;
        const discent = await this.discentDAO.readById(Number(id));
        return discent;
    }

    async createOrUpdateArea(areas:Area[], discent: Discent) {
        for (let area of areas) {
            area.discent = discent;
            await this.areaDAO.createArea(area);
        };
    }

    async deleteAreas(discent:Discent, areas: Area[]) {
        const discentAreas = discent.areas;
        const toRemove = discentAreas.filter((area) =>
            !areas.some(areaObj => areaObj.id && areaObj.id == area.id)
        );
        for (let area of toRemove) {
            await this.areaDAO.deleteArea(area);
        }
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

        const providedData = {
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
        Object.entries(providedData).forEach((v) => {
            const [key, value] = v;
            if (value) {
                data = {...data, [key]:value}
            }
        });
        let discent = await this.readById(req, res);
        discent = {...discent, ...data};
        await this.discentDAO.create(discent);
        if (areas) {
            const areasProvided:Area[] = areas;
            await this.createOrUpdateArea(areasProvided, discent);
            await this.deleteAreas(discent, areasProvided);
        }
        const updated = await this.readById(req, res);
        res.json(updated);
    }

    delete = async (req:Request, res:Response) => {
        const {id} = req.params;
        await this.discentDAO.remove(Number(id));
        res.json(`O discente com id ${id} foi removido.`);
    }
}

export default DiscentController;