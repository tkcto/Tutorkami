import schema from '@schema/register';
import AuthController from '@controller/auth';
import express, { Request, Response } from 'express';
import requestValidator from '@middleware/request.validator';

const router = express.Router();

router.post(
    '/local',
    schema.post_local,
    requestValidator,
    (req: Request, res: Response) => {
        AuthController.postRegister(req, res);
    }
);

router.post('/facebook', (req, res) => {
    res.send('register::facebook');
});

router.post('/google', (req, res) => {
    res.send('register::google');
});

export default router;
