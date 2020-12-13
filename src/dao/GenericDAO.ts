import { response } from 'express';
import { EntityTarget, getRepository } from 'typeorm';
import Area from '../models/Area';
import Discent from '../models/Discent';
import Project from '../models/Project';

export type Contructor<T> = { new (): T };

class GenericDAO<T> {
    private type: Contructor<T>;

    constructor(type: Contructor<T>) {
        this.type = type;
    }
    async create(entity: T): Promise<T> {
        const repository = getRepository(this.type);
        const createdEntity = repository.create(entity);
        const savedEntity = await repository.save(createdEntity);
        return savedEntity;
    }

    async read(relations: string[]): Promise<T[]> {
        const repository = getRepository(this.type);
        const entities = await repository.find({
            relations
            //relations: ["areas", "projects", "photo"]
        });
        return entities;
    }

    async readById(id:number, relations: string[]) {
        const repository = getRepository(this.type);
        const entity = await repository.findOneOrFail(id, {
            relations
            //relations: ['areas', 'projects', 'photo']
        });
        return entity;
    }

    async remove(id:number) {
        const repository = getRepository(this.type);
        await repository.delete(id);
    }

    async delete(entity: T):Promise<T> {
        const repository = getRepository(this.type);
        const removed = await repository.remove(entity);
        return removed;
    }
}

export default GenericDAO;