
const axios = require('axios');

export function getContentFromApi(cb){
  axios.get(``)
  .then(function (res) {
    cb(null, res.data);
  })
  .catch(function (error) {
      console.log(error);
      cb(error, null);
  })
}

export function getProperties(type, cb){
  axios.get(`http://property-search-json-server.herokuapp.com/` + type)
  .then(function (res) {
      cb(null, res.data);
  })
  .catch(function (error) {
      console.log(error);
      cb(error, null);
  })
}

