
require('http').createServer(function(req, res){
      DeviceDetector = require("device-detector-js");
      const deviceDetector = new DeviceDetector();
      const userAgent = req.headers['user-agent'];
      const detector = deviceDetector.parse(userAgent);
      const device = detector.device.type; 
      console.log(device);
}).listen(process.env.PORT || 3000);