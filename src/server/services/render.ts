import { Request, Response } from 'express';

const home = (req: Request, res: Response) => {
  res.render('index');
};

const add_workout = (req: Request, res: Response) => {
  res.render('add_workout');
};

const update_workout = (req: Request, res: Response) => {
  res.render('update_workout');
};

export { home, add_workout, update_workout };
