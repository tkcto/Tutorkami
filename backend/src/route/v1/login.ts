import express, { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import schema from '@schema/login';
import requestValidator from '@middleware/request.validator';

const router = express.Router();

router.post(
    '/local',
    schema.post_local,
    requestValidator,
    passport.authenticate('local', { failWithError: true, session: false }),
    (req: Request, res: Response, next: NextFunction) => {
        // Success
        return res.json({
            status: 0,
            code: 200,
            message: 'Successfully login',
        });
    },
    (err: any, req: Request, res: Response, next: NextFunction) => {
        // Failure
        return res.json({
            status: 1,
            code: 401,
            error: err,
        });
    }
);

router.post('/facebook', (req, res) => {
    res.send('login::facebook');
});

router.post('/google', (req, res) => {
    res.send('login::google');
});

export default router;
