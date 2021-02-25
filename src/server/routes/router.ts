import express from 'express';
import * as render from '../services/render';

const router = express.Router();

router.get('/', render.home);

router.get('/add-user', render.add_user);

router.get('/update-user', render.update_user);

export default router
