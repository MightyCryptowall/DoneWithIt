import { create } from "apisauce";

const apiClient = create({
    baseURL: "http://192.168.99.165:9000/api"
});


export default apiClient;