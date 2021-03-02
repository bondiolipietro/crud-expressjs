import { Request, Response } from 'express';
import axios from 'axios';
import PORT from '../config/port';

const home = (req: Request, res: Response) => {
  axios
    .get(`http://localhost:${PORT}/api/workout`)
    .then((response) => {
      res.render('index', { workout_list: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

const add_workout = (req: Request, res: Response) => {
  res.render('add_workout');
};

const update_workout = (req: Request, res: Response) => {
  axios
    .get(`http://localhost:${PORT}/api/workout`, { params: { id: req.query.id } })
    .then((response) => {
      res.render('update_workout', { workout: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

export { home, add_workout, update_workout };
