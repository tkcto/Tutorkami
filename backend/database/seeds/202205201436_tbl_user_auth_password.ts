import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('user_auth_password').del();

    // Inserts seed entries
    await knex('user_auth_password').insert([
        {
            user_auth_id: 1,
            password: 'need to fix this later with proper encryption',
        },
    ]);
}
