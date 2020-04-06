
require('http').createServer(function(req, res){
      DeviceDetector = require("device-detector-js");
      const deviceDetector = new DeviceDetector();
      const userAgent = request.headers['user-agent'];
      const detector = deviceDetector.parse(userAgent);
      const device = detector.device.type; 
      module.exports(device);
}).listen(8080);