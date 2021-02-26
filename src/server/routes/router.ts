import express from 'express';
import * as render from '../services/render';
import * as workoutController from '../controller/workoutController';

const router = express.Router();

router.get('/', render.home);

router.get('/add-workout', render.add_workout);

router.get('/update-workout', render.update_workout);

router.get('/api/workout', workoutController.find);
router.post('/api/workout', workoutController.create);
router.post('/api/workout/:id', workoutController.findByIdAndUpdate);
router.delete('/api/workout/:id', workoutController.findByIdAndDelete);

export default router
