var express = require('express');
var app = express();

app.get('/', function (req, res) {
      DeviceDetector = require("device-detector-js");
      const deviceDetector = new DeviceDetector();
      const userAgent = req.headers["user-agent"];
      const detector = deviceDetector.parse(userAgent);
      const device = detector.device.type; 
      if (device == 'desktop'){
            console.log('desktop');
            res.render('index');
      }
      else{
            console.log('mobile');
      }
});

