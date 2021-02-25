import express from 'express';
import * as render from '../services/render';

const router = express.Router();

router.get('/', render.home);

router.get('/add-user', render.home);

router.get('/update-user', render.home);

export default router
