import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class videos1607286127447 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: "videos",
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
                    name: 'video',
                    type: 'varchar'
                },
                {
                    name: 'year',
                    type: 'integer'
                },
                {
                    name: 'featured',
                    type: 'boolean'
                },
                {
                    name: 'description',
                    type: 'text'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("videos");
    }

}
