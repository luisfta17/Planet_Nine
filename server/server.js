const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const fetch = require('node-fetch');

MongoClient.connect('mongodb://localhost:27017', (err, client ) => {
  if (err) {
    console.error(err);
  }
  const db = client.db('space_hub');
  const planetsCollection = db.collection('planets');
  const planetsRouter = createRouter(planetsCollection);
  app.use('/api/planets', planetsRouter);

})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public', 'landing.html'));
});

app.get('/universe', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public', 'index.html'));
});

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(parser.json());

app.get('/api/hubble', (req, res) => {
  const randomNum = Math.floor((Math.random() * 4199) + 1);
  const url = 'http://hubblesite.org/api/v3/image/' + randomNum;
  fetch(url)
    .then(jsonData => jsonData.json())
    .then(data => res.json(data));
});



app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
