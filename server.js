const { PORT } = require('./config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || PORT;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Connected to Mongo database');
})

app.use(bodyParser.urlencoded({ extended: 'false' }));
app.use(bodyParser.json());

// GET
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/client/public/index.html');
})

app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/user', (req, res) => {
  res.json({ message: 'hello' })
})

// POST
app.post('/api/create/', (req, res) => {
  res.json({ message: 'create' });
  console.log('creating user');
})

app.post('/api/delete', (req, res) => {
  res.json({ message: 'delete' });
  console.log('deleting user');
})

app.post('/api/update', (req, res) => {
  res.json({ message: 'update' });
  console.log('updating user');
})

// LISTEN
app.listen(port, () => {
  console.log('API server running on the port ' + port);
})
