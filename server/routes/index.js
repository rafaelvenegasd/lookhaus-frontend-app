const express = require('express');
const router = express.Router();
const path = require('path');

// Router
router.get('/', (req, res) => {
    DeviceDetector = require("device-detector-js");
    const deviceDetector = new DeviceDetector();
    const userAgent = req.headers["user-agent"];
    const detector = deviceDetector.parse(userAgent);
    const device = detector.device.type; 

    if (device == 'desktop'){
      res.sendFile(__dirname +  '../public/desktop/index.html');
    }
    else{
		res.sendFile(__dirname + '../public/mobile/index.html');
    }
});

module.exports = router;


