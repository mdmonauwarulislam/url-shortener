const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const urlRoutes = require('./src/routes/urlRoutes');
const rateLimiter = require('./src/middleware/rateLimited');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(rateLimiter);

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }));

mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/', urlRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
