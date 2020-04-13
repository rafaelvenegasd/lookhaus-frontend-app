const express = require('express');
const bodyPraser = require('body-parser')
const path = require('path');
const cors = require('cors');
const app = express();
require('dotenv').config();

//Middlewares
app.use(bodyPraser.json());
app.use(cors());

const index = require('./routes/index');
app.use('/device', index);

//Handdle Production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(__dirname + './public/'));
	//Handle SPA
	app.get(/.*/, (req, res) => res.sendFile(__dirname + './public/index.html'));
}

// Connect server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
