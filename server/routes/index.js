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
      return res.send('desktop');
    }
    else{
      return res.send('mobile');
    }
});

module.exports = router;


