import { Request, Response } from 'express';
import crudDb from '../database/connection';

const create = (req: Request, res: Response) => {
  const { date, exercises } = req.body;

  const sql = 'INSERT INTO workout(date, exercises) VALUES(?, ?)';

  crudDb.run(sql, [date, exercises], (err: Error, rows: any) => {
    if (err) {
      res.status(500).send({ message: `Could not add Workout` });
    }
    res.redirect('/');
  });
};

const find = (req: Request, res: Response) => {
  if (req.query.id) {
    const id = req.query.id;

    const sql = 'SELECT * FROM workout WHERE id = ?;';

    crudDb.get(sql, [id], (err: Error, row: any) => {
      if (err) {
        res.status(500).send({ message: `Could not find Workout with id=${id}` });
      }
      res.send(row);
    });
  } else {
    const sql = 'SELECT * FROM workout ORDER BY date DESC;';

    console.log('query all');

    crudDb.all(sql, (err: Error, rows: any) => {
      if (err) {
        res.status(500).send({ message: `Could not find any Workout` });
      }
      res.send(rows);
    });
  }
};

const findByIdAndUpdate = (req: Request, res: Response) => {
  const { date, exercises } = req.body;
  const { id } = req.params;

  const sql = 'UPDATE workout SET date=?, exercises=? WHERE id=?;';

  crudDb.run(sql, [date, exercises, id], (err: Error) => {
    if (err) {
      res.status(500).send({ message: `Could not find Workout with id=${id}` });
    }
    res.redirect('/');
  });
};

const findByIdAndDelete = (req: Request, res: Response) => {
  const id = req.params.id;

  const sql = 'DELETE FROM workout WHERE id=?;';

  crudDb.run(sql, id, (err: Error) => {
    if (err) {
      res.status(500).send({ message: `Could not delete Workout with id=${id}` });
    }
    res.send({ message: 'Workout was deleted successfully!' });
  });
};

export { create, find, findByIdAndUpdate, findByIdAndDelete };
