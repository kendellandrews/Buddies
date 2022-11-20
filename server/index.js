require('dotenv').config()
const express = require('express');
const cors = require('cors');
const {SERVER_PORT} = process.env;
const {sequelize} = require('./util/database');

const app = express();
app.use(cors());
app.use(express.json());

sequelize.sync()
.then(() => {
    app.listen(SERVER_PORT, console.log('database connected on ${SERVER_PORT}'));
})
.catch(err => console.error(err));
