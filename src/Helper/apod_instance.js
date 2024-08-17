import axios from "axios";
import { PICTURE_OF_DAY } from "./Url";
const apod_axiosInstance = axios.create({
    baseURL: PICTURE_OF_DAY
})
export default apod_axiosInstance;