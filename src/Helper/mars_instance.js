import axios from "axios";
import { MARS_PICS } from "./Url";
const mars_axiosInstance = axios.create({
    baseURL: MARS_PICS
})
export default mars_axiosInstance;