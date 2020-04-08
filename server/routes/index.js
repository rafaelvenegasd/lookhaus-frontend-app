const express = require('express');
const router = express.Router();

// Router
router.get('/', (req, res) => {
    DeviceDetector = require("device-detector-js");
    const deviceDetector = new DeviceDetector();
    const userAgent = req.headers["user-agent"];
    const detector = deviceDetector.parse(userAgent);
    const device = detector.device.type; 

    if (device == 'desktop'){
      res.send('desktop');
    }
    else{
      res.send('mobile');
    }
});

module.exports = router;


