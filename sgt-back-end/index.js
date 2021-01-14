/* eslint-disable no-console */

const pg = require('pg');
const express = require('express');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.get('/api/grades', (req, res, next) => {

  const sql = `
    select *
    from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res, next) => {
  const data = req.body;

  if (data.name === '' || data.course === '' || data.score === '' || data.score < 0 || data.score > 100) {
    res.status(400).json({
      error: 'Invalid or missing information. Please try again.'
    });
    return;
  }

  const sql = `
    insert into "grades" ("name", "course", "score")
    values($1, $2, $3)
    returning *`;

  const values = [data.name, data.course, data.score];

  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const data = req.body;
  const gradeId = parseInt(req.params.gradeId, 10);

  if (!Number.isInteger(gradeId) || gradeId <= 0 || data.name === '' || data.course === '' || data.score === '' || data.score < 0 || data.score > 100) {
    res.status(400).json({
      error: 'Invalid ID or missing information. Please try again.'
    });
    return;
  }

  const sql = `update "grades"
    set "name" = $1, "course" = $2, "score" = $3
    where "gradeId" = $4
    returning *`;

  const values = [data.name, data.course, data.score, gradeId];

  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }

  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *`;

  const values = [gradeId];

  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.status(204).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
