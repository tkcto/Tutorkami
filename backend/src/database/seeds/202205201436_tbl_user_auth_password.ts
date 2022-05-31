import { Knex } from 'knex';
import bcrypt from 'bcrypt';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('user_auth_password').del();

    const password = 'abc123456';
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Inserts seed entries
    await knex('user_auth_password').insert([
        { user_auth_id: 1, password: hashedPassword },
        { user_auth_id: 2, password: hashedPassword },
        { user_auth_id: 3, password: hashedPassword },
    ]);
}
