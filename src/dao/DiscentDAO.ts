import { response } from 'express';
import { getRepository } from 'typeorm';
import Area from '../models/Area';
import Discent from '../models/Discent';

class DiscentDAO {
    async create(discent: Discent): Promise<Discent> {
        const repository = getRepository(Discent);
        const discentEntity = repository.create(discent);
        const discentSaved = await repository.save(discentEntity);
        return discentSaved;
    }

    async read(): Promise<Discent[]> {
        const repository = getRepository(Discent);
        const discents = await repository.find({
            relations: ["areas", "projects", "photo"]
        });
        return discents;
    }

    async readById(id:number) {
        const repository = getRepository(Discent);
        const discent = await repository.findOneOrFail(id, {
            relations: ['areas', 'projects', 'photo']
        });
        return discent;
    }

    async remove(id:number) {
        const repository = getRepository(Discent);
        const removed = await repository.delete(id);
    }
}

export default DiscentDAO;