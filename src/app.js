const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const urlRoutes = require('./routes/urlRoutes');
const rateLimiter = require('./middleware/rateLimited');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(rateLimiter);

mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/', urlRoutes);

module.exports = app;
