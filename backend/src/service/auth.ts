import AuthModel from '@model/auth';
import { Request } from 'express';
import { autoInjectable } from 'tsyringe';
import bcrypt from 'bcrypt';

@autoInjectable()
class AuthService {
    private authModel: AuthModel;

    constructor(authModel: AuthModel) {
        this.authModel = authModel;
    }

    async postRegister(req: Request): Promise<{
        code: number;
        status: number;
        error?: string;
        message?: string;
    }> {
        const email = req.body.email;
        const name = req.body.name;
        const group = req.body.group;
        const password = req.body.password;
        const hashedPassword = bcrypt.hashSync(password, 10);

        const isUserExist = await this.authModel.isUserExist(email);

        if (isUserExist) {
            return {
                code: 400,
                status: 1,
                error: 'User already exist',
            };
        }

        const user_id = await this.authModel.createUser(email, name);

        const user_auth_id = await this.authModel.createUserAuth(
            user_id,
            'local'
        );

        await this.authModel.createUserAuthPassword(
            user_auth_id,
            hashedPassword
        );

        await this.authModel.createUserGroup(user_id, group);

        return {
            code: 201,
            status: 0,
            message: 'User created',
        };
    }
}

export default AuthService;
