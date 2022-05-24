import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(
        'user_auth_password',
        (table: Knex.CreateTableBuilder) => {
            table.engine('INNODB');
            table.increments();
            table.integer('user_auth_id').unsigned().notNullable();
            table.string('password').notNullable();
            table.timestamps(true, true);
            table
                .foreign('user_auth_id')
                .references('id')
                .inTable('user_auth')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        }
    );
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('user_auth_password');
}
