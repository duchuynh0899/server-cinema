const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
require('dotenv/config');

//Middlewares
// app.use('/posts', () => {
//   console.log('Middlewares run');
// });

//Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/posts', function (req, res) {
  res.send('GET request to post');
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log('THử mông');
});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

app.listen(port);
