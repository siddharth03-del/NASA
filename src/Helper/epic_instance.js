import axios from "axios";
import { EARTH_IMAGE } from "./Url";
const epic_axios_instance = axios.create({
    baseURL: EARTH_IMAGE
})
export default epic_axios_instance;