import express from 'express';
import HomeController from '@controller/home';
import authRoute from './auth';

const router = express.Router();

router.get('/', (req, res) => {
    HomeController.Index(req, res);
});

router.use('/auth', authRoute);

export default router;
