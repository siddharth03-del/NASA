import Navbar from "./Navbar/Navbar";
import APOD from "./APOD/APOD";
import Neoheader from "./NeoHeader/Neoheader";
import Neoheading from "./Neoheading/Neoheading";
import NeoInputForm from "./NeoInputForm/NeoInputForm";
import NeoTable from "./NeoTable/NeoTable";
import Background from "./assets/Asteroid.webp"
import { useState } from "react";
function App(){
  const [startDate, setstartDate] = useState("0000-00-00");
  const [endDate, setendDate] = useState("0000-00-00");
  const [open, setopen] = useState(false);
  return(
    <div className="w-full z-10" onClick={()=>{
      setopen(false);
    }}>
        <Navbar open={open} setopen={setopen}/>
        <APOD/>
        <div className="relative bg-center bg-scroll bg-cover w-full h-[809.5px]"> 
          <img src={Background} className="absolute z-0" style={{opacity: 0.8}}></img>
          <div className="absolute z-10 w-full">
          <Neoheading/>
        <NeoInputForm setstartDate={setstartDate} setendDate={setendDate}/>
        <Neoheader/>
        <NeoTable startDate={startDate} endDate={endDate}/>
          </div>
        </div>
    </div>
  )
}
export default App;