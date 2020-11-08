import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createDocentes1604859944800 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table ({
            name: "docentes",
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'lastname',
                    type: 'varchar'
                },
                {
                   name: 'email',
                   type: 'varchar' 
                },
                {
                   name: 'phone',
                   type: 'integer'
                },
                {
                    name: 'course',
                    type: 'varchar'
                },
                {
                    name: 'category',
                    type: 'varchar'
                },
                {
                    name: 'occupation',
                    type: 'varchar'
                },
                {
                    name: 'degree',
                    type: 'varchar'
                },
                {
                    name: 'bio',
                    type: 'text'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('docentes');
    }


}
