import { response } from 'express';
import { getRepository } from 'typeorm';
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
            relations: ["areas", "projects"]
        });
        return discents;
    }

}

export default DiscentDAO;