const axios = require('axios');

function DeviceService(backCall){
    this.backCall = backCall;
}

DeviceService.prototype.getDevice = function (cb) {
    axios.get(this.backCall)
    .then(function (res) {
        return cb(null, res.data);
    })
    .catch(function(err) {
        console.log(err);
        return cb(err, null);
    })
}

export default DeviceService;





