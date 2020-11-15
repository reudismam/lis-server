import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class projetos1605399391966 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: "projetos",
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
                    name: "title",
                    type: 'varchar'
                },
                {
                    name: 'year',
                    type: 'integer'
                },
                {
                    name: 'description',
                    type: 'text'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("projetos");
    }

}
