import neo_axiosinstance from "../Helper/neo_instance";
import { API } from "../Helper/Url";
async function fetchNEO(startdate, enddate){
    try{
        const response = await neo_axiosinstance(`feed?api_key=${API}&start_date=${startdate}&end_date=${enddate}`)
        console.log(response.data.near_earth_objects);
        return response.data.near_earth_objects
    }
    catch(error){
        console.log(error);
        return null;
    }
}
export default fetchNEO;