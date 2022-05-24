import 'reflect-metadata';
import AuthService from '@service/auth';
import { Request, Response } from 'express';
import { autoInjectable, container } from 'tsyringe';

@autoInjectable()
class AuthController {
    private authService: AuthService;

    constructor(authService: AuthService) {
        this.authService = authService;
    }

    async postRegister(req: Request, res: Response) {
        const result = await this.authService.postRegister(req);
        res.json(result);
    }
}

export default container.resolve(AuthController);
