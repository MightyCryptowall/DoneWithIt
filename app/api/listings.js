import apiClient from "./apiClient";

const endpoint = "/listings";

const getListings = () => apiClient.get(endpoint);

export default {
    getListings,
    
}