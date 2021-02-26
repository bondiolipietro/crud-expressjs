import path from 'path';
const sqlite3 = require('sqlite3').verbose();

const dbPath = path.resolve(__dirname, 'db/crud.db');

const crudDb = new sqlite3.Database(
  dbPath,
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err: Error) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the Crud SQlite database.');
  }
);

crudDb.run(
  `CREATE TABLE IF NOT EXISTS workout(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date DATE NOT NULL,
        exercises TEXT NOT NULL
      )`
);

export default crudDb;
