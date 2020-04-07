import DeviceDetector from "device-detector-js";

const deviceDetector = new DeviceDetector();
const userAgent = navigator.userAgent;
const detector = deviceDetector.parse(userAgent);
const device = detector.device.type; 
var message = ''

if (device == 'desktop'){
    message ='Soy desktop'
}else{
    message ='Soy mobile'
}

export default message;