import { useQuery } from "react-query";
import { fetchAPOD } from "../Servics/fetchAPOD";
import Background from "../assets/astronomy_background.jpg"
import { useState , useEffect} from "react";
import {  Datenow } from "../Helper/date";
import { PrevDate, NxtDate } from "../Helper/date";
import { prevcall } from "../Helper/date";
import ClipLoader from 'react-spinners/ClipLoader';
import { Datenoww } from "../Helper/date";
function APOD(){
    const [date, updatedate] = useState("");
    useEffect(()=>{
        console.log('called')
        const d = Datenow();
        console.log(d);
        updatedate(d);
    },[])
    const {data, isLoading, isError} = useQuery(['apod', date], ()=>fetchAPOD(date),
    {
        cacheTime: 1000000*60*2,
        staleTime: 1000000*60*2,
        retry: 10,
    }
)
    useEffect(()=>{
        const media = (data && data.media_type)
        if(media == "video"){
            if(prevcall){
                PrevDate(date, updatedate);
            }
            else{
                NxtDate(date, updatedate);
            }
        }
    },[data])

    return(
        <div className="flex flex-row bg-center bg-fixed bg-cover relative w-full overflow-hidden">
            <div className="">
            <img src={Background} alt="galaxy" style={{opacity:0.6}} className="absolute z-0 w-full h-full"/>
            </div>
            <div className="z-10 flex flex-row w-full">
            <div className="w-6/12 h-[595px]">
                {isError && <h1>Error</h1>}
                {isLoading && <ClipLoader color="#ffffff" loading={isLoading} size={400} className=" my-auto object-contain"/>}
                {data && <img src={data.hdurl} title="image" className="mx-auto h-full w-full object-contain"></img>}
            </div>
            <div className="w-6/12 flex flex-col px-3 justify-evenly">
                <div className="">
                <h1 className="text-white text-3xl ">{data && data.title}</h1>
                {isError && <h1>Error</h1>}
                {isLoading && <ClipLoader color="#ffffff" loading={isLoading} size={400} className=" my-auto"/>}
                {data && <p className="text-white text-l mt-5">{data.explanation}</p>}
                </div>
                <div className="flex flex-row justify-evenly h-16 w-full items-center">
                    <div>
                        <h1 className="text-white font-bold font-mono  text-2xl">Date</h1>
                        <h1 className="text-white font-bold font-mono text-xl">{date}</h1>
                    </div>
                    <div className="">
                        <button className="border-2 border-black h-10 w-24 rounded-xl text-xl font-mono font-bold text-white mr-2" onClick={()=>{PrevDate(date, updatedate)}}>
                            Prev
                        </button>
                        <button className="border-2 border-black h-10 w-24 rounded-xl text-xl font-mono font-bold text-white ml-2" onClick = {()=>{NxtDate(date, updatedate)}} disabled={date == Datenoww}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default APOD;