import express from 'express';

const router = express.Router();

router.post('/local', (req, res) => {
    res.send('register::local');
});

router.post('/facebook', (req, res) => {
    res.send('register::facebook');
});

router.post('/google', (req, res) => {
    res.send('register::google');
});

export default router;
