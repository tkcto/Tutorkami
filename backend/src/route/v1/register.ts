import express, { Request, Response } from 'express';
import AuthController from '@controller/auth';
import requestValidator from '@middleware/request.validator';
import schema from '@schema/register';

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
