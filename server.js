const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/key').mongoURL;

// DB connect
mongoose
    .connect(db)
    .then(()=>console.log('MongoDB Connected...'))
    .catch(err=>console.log(err))

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Server run on ${port} port ...`))