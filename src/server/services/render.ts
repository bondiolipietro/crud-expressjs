import { Request, Response } from 'express';

const home = (req: Request, res: Response) => {
  res.render('index');
};

const add_user = (req: Request, res: Response) => {
  res.render('add_user');
};

const update_user = (req: Request, res: Response) => {
  res.render('update_user');
};

export { home, add_user, update_user };
