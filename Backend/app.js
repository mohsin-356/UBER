const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',function(req, res) {
    res.send('Hello World');
})

module.exports = app;