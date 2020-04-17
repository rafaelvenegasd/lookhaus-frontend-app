
const axios = require('axios');

export function getProperties(type, cb){
  axios.get(`https://lookhaus-api.herokuapp.com/` + type + `?kind=flat`)
  .then(function (res) {
      cb(null, res.data);
  })
  .catch(function (error) {
      console.log(error);
      cb(error, null);
  })
}

export function getPropertiesById(type, id, cb){
  axios.get(`https://lookhaus-api.herokuapp.com/`+ type + `/` + id)
  .then(function (res) {
      cb(null, res.data);
  })
  .catch(function (error) {
      console.log(error);
      cb(error, null);
  })
}

