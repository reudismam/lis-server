import { getRepository } from "typeorm";
import Discent from '../models/Discent';

class DiscentDAO {
    async create(discent: Discent) {
        const repository = getRepository(Discent);
        const discentEntity = repository.create(discent);
        const discentSaved = await repository.save(discentEntity);
        return discentSaved;
    }
    async read() {
        const repository = getRepository(Discent);
        const discents = await repository.find();
        return discents;
    }
    async update() {

    }
    async delete() {

    }
}

export default DiscentDAO;