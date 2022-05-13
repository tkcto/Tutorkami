import 'reflect-metadata';
import HomeService from '@service/home';
import { Request, Response } from 'express';
import { autoInjectable, container } from 'tsyringe';

@autoInjectable()
class HomeController {
    private service: HomeService;

    constructor(service: HomeService) {
        this.service = service;
    }

    async Index(req: Request, res: Response) {
        console.log(this);
        res.send(this.service.Index());
    }
}

export default container.resolve(HomeController);
