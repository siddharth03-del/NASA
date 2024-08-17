import axios from "axios";
import { NEO } from "./Url";
const neo_axiosinstance = axios.create({
    baseURL: NEO
})
export default neo_axiosinstance;