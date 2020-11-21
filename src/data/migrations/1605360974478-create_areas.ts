import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createAreas1605360974478 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'areas',
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
                    name: 'discente_id',
                    type: 'integer'
                }
            ],
            foreignKeys: [
                {
                    name: "discente_id",
                    columnNames: ['discente_id'],
                    referencedTableName: 'discentes',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("areas");
    }

}
