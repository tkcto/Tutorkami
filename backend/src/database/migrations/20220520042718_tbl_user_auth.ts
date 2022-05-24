import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(
        'user_auth',
        (table: Knex.CreateTableBuilder) => {
            table.engine('INNODB');
            table.increments();
            table.integer('user_id').unsigned().notNullable();
            table.enum('auth_type', ['local', 'google', 'facebook']);
            table.timestamps(true, true);
            table
                .foreign('user_id')
                .references('id')
                .inTable('user')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        }
    );
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('user_auth');
}
