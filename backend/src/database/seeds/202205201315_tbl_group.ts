import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('group').del();

    // Inserts seed entries
    await knex('group').insert([
        { name: 'Super' },
        { name: 'Admin' },
        { name: 'Client' },
        { name: 'Tutor' },
    ]);
}
