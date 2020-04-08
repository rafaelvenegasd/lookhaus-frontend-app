import { axios } from "axios";
const backCall = 'device/';

class DeviceService{
    static getDevice(){
        return new Promise (async (resolve, reject) => {
            try {
                const res = await axios.get(backCall);
                const data = res.data;
                resolve(data);
            } catch (error) {
                reject(error);
            }
        })
    }
}

export default DeviceService;

