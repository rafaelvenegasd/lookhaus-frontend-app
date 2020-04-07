const express = require('express');
const router = express.Router();

// Router
router.get('/', (req, res) => {
    console.log("in the function")
    DeviceDetector = require("device-detector-js");
    const deviceDetector = new DeviceDetector();
    const userAgent = req.headers["user-agent"];
    const detector = deviceDetector.parse(userAgent);
    const device = detector.device.type; 
  
    if (device == 'desktop'){
      console.log('desktop');
      // res.render('index');
    }
    else{
      console.log('mobile');
    }
  
  });

 module.exports = router;