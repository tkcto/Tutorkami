import express from 'express';
import HomeController from '@controller/home';

const router = express.Router();

router.get('/', (req, res) => {
    HomeController.Index(req, res);
});

export default router;
