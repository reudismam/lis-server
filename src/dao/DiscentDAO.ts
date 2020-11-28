import { response } from 'express';
import { Connection, getConnection, getRepository } from 'typeorm';
import Area from '../models/Area';
import Discent from '../models/Discent';
import Project from '../models/Project';

class DiscentDAO {
    async create(discent: Discent): Promise<Discent> {
        const repository = getRepository(Discent);
        const discentEntity = repository.create(discent);
        const discentSaved = await repository.save(discentEntity);
        return discentSaved;
    }

    async createArea(discent: Area): Promise<Area> {
        const repository = getRepository(Area);
        const areaEntity = repository.create(discent);
        const created = await repository.save(areaEntity);
        return created;
    }

    async updateArea(discent: Area) {
        const repository = getRepository(Area);
        const discentSaved = await repository.save(discent);
        return discentSaved;
    }

    async deleteArea(area: Area):Promise<Area>{
        const repository = getRepository(Area);
        const removed = await repository.remove(area);
        return removed;
    }

    async read(): Promise<Discent[]> {
        const repository = getRepository(Discent);
        const discents = await repository.find({
            relations: ["areas", "projects", "photo"]
        });
        return discents;
    }

    async readById(id:number):Promise<Discent> {
        const repository = getRepository(Discent);
        const discent = await repository.findOneOrFail(id, {
            relations: ["areas", "projects", "photo"]
        });
        return discent;
    }

    async readProject(project: Project):Promise<Project> {
        const repository = getRepository(Project);
        const pj = await repository.findOneOrFail({
            where: [{title:project.title}]
        });
        return pj;
    }

    async update(newData: Discent): Promise<Discent> {
        const repository = getRepository(Discent);
        //const discent = await repository.update(id, newData);
        try {
          const updated = await repository.save(newData);
          return updated;
        }catch(error) {
            return error;
        }
    }
}

export default DiscentDAO;