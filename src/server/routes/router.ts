import express from 'express';
import * as render from '../services/render';

const router = express.Router();

router.get('/', render.home);

router.get('/add-workout', render.add_workout);

router.get('/update-workout', render.update_workout);

export default router
