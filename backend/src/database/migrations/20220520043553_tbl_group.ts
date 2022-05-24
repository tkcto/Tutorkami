import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(
        'group',
        (table: Knex.CreateTableBuilder) => {
            table.engine('INNODB');
            table.increments();
            table.string('name').notNullable();
            table.timestamps(true, true);
        }
    );
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('group');
}
