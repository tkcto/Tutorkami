import { ResultSetHeader } from 'mysql2';
import Model from './model';

type Group = 'Super' | 'Admin' | 'Client' | 'Tutor';
type AuthType = 'local' | 'facebook' | 'google';

type UserData = {
    id: number;
    email: string;
    name: string;
    created_at: string;
    updated_at: string;
};

type UserLocalData = {
    id: number;
    email: string;
    name: string;
    auth_type: string;
    password: string;
};

class AuthModel extends Model {
    async isUserExist(email: string): Promise<boolean> {
        const result = await this.findUser(email);
        return result.length > 0;
    }

    async findUser(email: string): Promise<UserData[]> {
        const result = await this.db.query(
            `SELECT * FROM user WHERE email=?`,
            email
        );

        return result;
    }

    async findUserLocal(
        email: string,
        group: string
    ): Promise<UserLocalData[]> {
        const result = await this.db.query(
            `
				SELECT 
					u.id, u.email, u.name, ua.auth_type, 
					uap.password, ug.group_id, g.name group_name
				FROM user u INNER JOIN user_auth ua ON u.id = ua.user_id
				INNER JOIN user_auth_password uap on ua.id = uap.user_auth_id
                INNER JOIN user_group ug on u.id = ug.user_id
                INNER JOIN \`group\` g on ug.group_id = g.id
				WHERE ua.auth_type='local' AND u.email=? and g.name=?
			`,
            email,
            group
        );

        return result;
    }

    async createUser(email: string, name: string): Promise<number> {
        const result = await this.db.query<ResultSetHeader>(
            `INSERT INTO user (email, name) VALUES(?,?)`,
            email,
            name
        );

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
