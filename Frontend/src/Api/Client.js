import axios from "axios";
const URL = process.env.REACT_APP_API_URL;

const ApiClient = axios.create({
    baseURL: `http://${URL}`,
})

export default ApiClient;