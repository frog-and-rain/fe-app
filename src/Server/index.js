const mySql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(config.PORT, () =>
  console.log(`Server is running. Point your browser to: http://localhost:${config.PORT}`)
);

const con = mySql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chatting'
});

con.connect(err => {
  if (err) throw err;
  con.query('select * from users', (err, result) => {
    if (err) throw err;
    app.get('/users', (req, res) => res.send(result));
  });
});

app.post('/create', (req, res) => {
  console.log(req.body.id);
  res.send('request success !');
});