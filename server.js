const express = require('express');
const path = require('path');
const index = require('./routes/index');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();

// Connect server
app.listen(port, () => {
  console.log(`Server listening in port ${port}`);
});

app.use('/', index);

// // Router
// router.get('/', (req, res) => {
//   console.log("in the function")
//   DeviceDetector = require("device-detector-js");
//   const deviceDetector = new DeviceDetector();
//   const userAgent = req.headers["user-agent"];
//   const detector = deviceDetector.parse(userAgent);
//   const device = detector.device.type; 

//   if (device == 'desktop'){
//     console.log('desktop');
//     // res.render('index');
//   }
//   else{
//     console.log('mobile');
//   }

// });

// Settings
app.set('views', path.join(__dirname, './src/views'));

// Assets
app.use(express.static(path.join(__dirname, './src/assets')));
