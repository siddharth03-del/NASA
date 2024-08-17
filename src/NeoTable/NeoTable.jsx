import { useQuery } from "react-query";
import fetchNEO from "../Servics/fetchNEO";
import { useEffect , useState} from "react";
function NeoTable({startDate, endDate}){
    const [dataArray, updatedataArray] = useState([]);
    const {data, isLoading, isError} = useQuery([startDate, endDate],
        ()=>fetchNEO(startDate, endDate),
        {
            cacheTime: 1000*60*2,
            staleTime: 1000*60*2,
        }
    )
    useEffect(()=>{
        if(data){
            updatedataArray(Object.values(data));
        }
    },[data])
    useEffect(()=>{
        console.log(dataArray)
    },[dataArray])
    return(
        <div className="overscroll-contain h-96 overflow-scroll no-scrollbar">
            {isLoading && <h1>Loading...</h1>}
            {dataArray && dataArray.map((value, index)=>{
                return(
                    <div key={index}>
                        {value.map((val)=>{
                            return(
                                <div key={val.id} className="w-full flex flex-row">
                                    <div className="w-2/12 pl-2 text-white font-mono">
                                        {val.name}
                                    </div>
                                    <div className="w-2/12 pl-2 text-white font-mono">
                                        {val.estimated_diameter.kilometers.estimated_diameter_max}
                                    </div>
                                    <div className="w-3/12 pl-5 text-white font-mono">
                                        {val.close_approach_data[0].close_approach_date_full}
                                    </div>
                                    <div className="w-3/12 pl-5 text-white font-mono">
                                        {val.close_approach_data[0].relative_velocity.kilometers_per_hour}
                                    </div>
                                    <div className="w-2/12 pl-2 text-white font-mono">
                                        {val.close_approach_data[0].miss_distance.kilometers}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}
export default NeoTable;