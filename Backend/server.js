const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();

// Routes
const authRoutes = require('./routes/auth');
const shopRoutes = require('./routes/shop');

app.use(cors())
// Body parser => parse incoming body to json
app.use(express.json())


app.use(authRoutes);
app.use(shopRoutes);

mongoose
  .connect('mongodb://localhost/Ecommerce',{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(5000);
    console.log('connected')
  })
  .catch(err => {
    console.log(err);
  });