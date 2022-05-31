import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('user_auth').del();

    // Inserts seed entries
    await knex('user_auth').insert([
        { user_id: 1, auth_type: 'local' },
        { user_id: 2, auth_type: 'local' },
        { user_id: 3, auth_type: 'local' },
    ]);
}
