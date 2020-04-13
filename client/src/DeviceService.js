const axios = require('axios');

export default function getDevice(cb){
    axios.get(`http://localhost:3000/device/`)
    .then(function (res) {
        cb(null, res.data);
    })
    .catch(function (error) {
        console.log(error);
        cb(error, null);
    })
}




