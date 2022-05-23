import express from 'express';

const router = express.Router();

router.post('/local', (req, res) => {
    res.send('login::local');
});

router.post('/facebook', (req, res) => {
    res.send('login::facebook');
});

router.post('/google', (req, res) => {
    res.send('login::google');
});

export default router;
