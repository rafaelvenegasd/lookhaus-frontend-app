const express = require('express');
const router = express.Router();
const bodyPraser = require('body-parser')
const path = require('path');
const cors = require('cors');
const app = express();
require('dotenv').config();

//Middlewares
app.use(bodyPraser.json());
app.use(cors());

//Handdle Production
// if (process.env.NODE_ENV === 'production') {
	app.use(express.static(__dirname + '/public/'));
	//Handle SPA
	app.get(/.*/, (req, res) => {

	DeviceDetector = require("device-detector-js");
    const deviceDetector = new DeviceDetector();
    const userAgent = req.headers["user-agent"];
    const detector = deviceDetector.parse(userAgent);
    const device = detector.device.type;

    if (device == 'desktop'){
		res.sendFile(__dirname + '/public/desktop/index.html');
	}else{
		res.sendFile(__dirname + '/public/mobile/index.html');
	}});
// }

// Connect server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
