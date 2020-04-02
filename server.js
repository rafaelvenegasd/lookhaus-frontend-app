var static = require('node-static');
var file = new static.Server('./dist');
require('http').createServer(function(request, response) {
    request.addListener('start', function() {
      DeviceDetector = require("device-detector-js");
      const deviceDetector = new DeviceDetector();
      const userAgent = req.headers['user-agent'];
      const device = deviceDetector.parse(userAgent);
      console.log(device);
    }).resume();
    request.addListener('end', function() {
      file.serve(request, response);
    }).resume();
}).listen(process.env.PORT || 3000);