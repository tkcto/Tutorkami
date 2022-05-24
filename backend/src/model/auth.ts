import { ResultSetHeader } from 'mysql2';
import Model from './model';

type Group = 'Super' | 'Admin' | 'Client' | 'Tutor';
type AuthType = 'local' | 'facebook' | 'google';

class AuthModel extends Model {
    async isUserExist(email: string): Promise<boolean> {
        const data = await this.db.query(
            `SELECT * FROM user WHERE email=?`,
            email
        );

        return data.length > 0;
    }

    async createUser(email: string, name: string): Promise<number> {
        const result = await this.db.query<ResultSetHeader>(
            `INSERT INTO user (email, name) VALUES(?,?)`,
            email,
            name
        );

        console.dir(result.insertId);
        return result.insertId;
    }

    async createUserAuth(
        user_id: number,
        auth_type: AuthType
    ): Promise<number> {
        const result = await this.db.query<ResultSetHeader>(
            `INSERT INTO user_auth (user_id, auth_type) VALUES(?,?)`,
            user_id,
            auth_type
        );

        return result.insertId;
    }

    async createUserAuthPassword(
        user_auth_id: number,
        password: string
    ): Promise<number> {
        const result = await this.db.query<ResultSetHeader>(
            `INSERT INTO user_auth_password (user_auth_id, password) VALUES(?,?)`,
            user_auth_id,
            password
        );

        return result.insertId;
    }

    async createUserGroup(user_id: number, group: Group): Promise<number> {
        const result = await this.db.query<ResultSetHeader>(
            'INSERT INTO user_group (user_id, group_id) VALUES (?, (SELECT id FROM `group` WHERE name=?))',
            user_id,
            group
        );

        return result.insertId;
    }
}

export default AuthModel;
