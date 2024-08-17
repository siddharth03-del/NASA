import { useState } from "react"
function NeoInputForm({setstartDate, setendDate}){
    const [sdate, setsdate] = useState("0000-00-00");
    const [edate, setedate] = useState("0000-00-00");
    function clickhandler(){
        setstartDate(sdate);
        setendDate(edate);
        console.log(sdate);
        console.log(edate);
    }
    return(
        <div className="w-full flex flex-col justify-around h-60">
            <div className="w-full flex flex-col items-center">
                <h1 className="text-2xl font-mono font-bold text-blue-400">Choose the date for NEO information</h1>
                <h6 className="text-lg text-red-600">Maximum gap 7 days</h6>
            </div>
            <div className="w-full flex flex-row justify-evenly">
                <div>
                    <h1 className="text-xl text-blue-500 font-mono font-bold">Startdate</h1>
                    <input className="text-xl" type="date" name="start-date" id="start-date" onChange={()=>{setsdate(event.target.value)}}/>
                </div>
                <div>
                    <h1 className="text-xl text-blue-500 font-mono font-bold">EndDate</h1>
                    <input className="text-xl" type="date" name="end-date" id="end-date" onChange={()=>{setedate(event.target.value)}}/>
                </div>
                <div>
                    <button className="border-2 bg-blue-400 border-blue-600 w-24 h-10 rounded-xl text-white font-mono font-bold text-xl mt-2" onClick={()=>{clickhandler()}}>
                        Submit
                    </button>
                </div>
            </div>
            
        </div>
    )
}
export default NeoInputForm;