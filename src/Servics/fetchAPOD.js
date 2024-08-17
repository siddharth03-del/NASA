import apod_axiosInstance from "../Helper/apod_instance";
import { API } from "../Helper/Url";
export async function fetchAPOD(date){
    try{
        const response = await apod_axiosInstance.get(`?api_key=${API}&date=${date}`)
        console.log(response.data);
        return response.data;
    }
    catch(error){
        console.log(`there is error fetching the image error=${error}`)
        return null;
    }
}