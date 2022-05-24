import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(
        'user_group',
        (table: Knex.CreateTableBuilder) => {
            table.engine('INNODB');
            table.increments();
            table.integer('user_id').unsigned().notNullable();
            table.integer('group_id').unsigned().notNullable();
            table.timestamps(true, true);

            table
                .foreign('user_id')
                .references('id')
                .inTable('user')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');

            table
                .foreign('group_id')
                .references('id')
                .inTable('group')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        }
    );
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('user_group');
}
