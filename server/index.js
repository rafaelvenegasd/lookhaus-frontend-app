const express = require('express');
const bodyPraser = require('body-parser')
const cors = require('cors');
const app = express();
require('dotenv').config();

//Middlewares
app.use(bodyPraser.json());
app.use(cors());

app.use(express.static(__dirname + '/public/'));
const serveFailes = require('./routes');
app.use('/', serveFailes)


// Connect server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
