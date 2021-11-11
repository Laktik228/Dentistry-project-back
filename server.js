'use strict'

const express = require('express');
const cors = require('cors');
const config = require('config')
const AppConfig = config.get("App")
const port = AppConfig.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./app/routes/reservationRoute')(app);

app.listen(port, () => {
    console.log()
    console.log()
    console.log("**********************************************************************************************")
    console.log()
    console.log(`-------------------------------Server running on the port ${AppConfig.PORT}--------------------------------`);
    console.log()
    console.log("**********************************************************************************************")
    console.log()
})