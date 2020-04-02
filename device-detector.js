
require('http').createServer(function(request, response) {
      DeviceDetector = require("device-detector-js");
      const deviceDetector = new DeviceDetector();
      const userAgent = request.headers['user-agent'];
      const device = deviceDetector.parse(userAgent);
      console.log(device);
}).listen(process.env.PORT || 3000);