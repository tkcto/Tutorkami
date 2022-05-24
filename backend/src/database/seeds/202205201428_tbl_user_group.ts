import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('user_group').del();

    // Inserts seed entries
    await knex('user_group').insert([
        { user_id: 1, group_id: 1 },
        { user_id: 1, group_id: 2 },
    ]);
}
