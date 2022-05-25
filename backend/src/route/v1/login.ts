import express from 'express';
import passport from 'passport';

const router = express.Router();

router.post(
    '/local',
    passport.authenticate('local', {
        successRedirect: '/client',
        failureRedirect: '/client/login',
        session: false,
    })
);

router.post('/facebook', (req, res) => {
    res.send('login::facebook');
});

router.post('/google', (req, res) => {
    res.send('login::google');
});

export default router;
