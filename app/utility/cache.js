import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = "cache";
const expiryInMinutes = 30;

const store = async (key, value) => {
    try {
        const item = {
            value,
            timestamp: Date.now()
        }
        await AsyncStorage.setItem(`${prefix}-${key}`, JSON.stringify(value));
    } catch (error) {
        console.log(error);
    }
}

// Function or Mehtod should follow Single Responsibility Principle

const isExpired = (item) => {
    const now = moment(Date.now());
    const storedTime = moment(item.timestamp);
    return now.diff(storedTime, "minutes") > expiryInMinutes;
}

const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(`${prefix}-${key}`);
        const item = JSON.parse(value); 
        
      
        
        if(!item) return null;
       
        if(isExpired(item)) {
            // Breaking Command Query Separation (CQS) rule
           
            await AsyncStorage.removeItem(`${prefix}-${key}`);
            return null;
        }
        return item;


    } catch (error) {
        console.log(error);
    }
}

export default {
    store,
    get
}