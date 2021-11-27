import apiClient from "./apiClient";

const register = (userInfo) => apiClient.post("/users", userInfo);

export default { register };