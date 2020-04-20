
const axios = require('axios');
const base_url = 'https://lookhaus-api.herokuapp.com/'
const pagination = "page='5'"


export function getProperties(type, cb){
  axios.get(base_url + type)
  .then(function (res) {
      cb(null, res.data);
  })
  .catch(function (error) {
      console.log(error);
      cb(error, null);
  })
}

export function getPropertiesById(type, id, cb){
  axios.get(base_url+ type + `/` + id)
  .then(function (res) {
      cb(null, res.data);
  })
  .catch(function (error) {
      console.log(error);
      cb(error, null);
  })
}

export function signupUser(params, cb){
  axios.post(base_url + `signup/users`, params)
  .then(function (res) {
      console.log(res.data);
      cb(null, res.data);
  })
  .catch(function (error) {
      console.log(error);
      cb(error, null);
  })
}

export function loginUser(params, cb){
  axios.post(base_url + `login/users`, params)
  .then(function (res) {
      console.log(res.data);
      cb(null, res.data);
  })
  .catch(function (error) {
      console.log(error);
      cb(error, null);
  })
}


