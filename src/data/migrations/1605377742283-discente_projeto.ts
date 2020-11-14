import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class discenteProjeto1605377742283 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: "discente_projeto",
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
                    name: 'discentes_id',
                    type: 'integer'
                },
                {
                    name: 'projetos_id',
                    type: 'integer'
                }
            ],
            foreignKeys:[
                {
                    name: 'discentes_id',
                    columnNames: ['discentes_id'],
                    referencedTableName: 'discentes',
                    referencedColumnNames: ['id']
                },
                {
                    name: 'projetos_id',
                    columnNames: ['projetos_id'],
                    referencedTableName: 'projetos',
                    referencedColumnNames: ['id']
                }
            ]  
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("discente_projeto");
    }

}
