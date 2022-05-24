import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('user', (table: Knex.CreateTableBuilder) => {
        table.engine('INNODB');
        table.increments();
        table.string('email').notNullable();
        table.string('name').notNullable();
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('user');
}
