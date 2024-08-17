import nasa_logo from "../assets/nasa_logo.jpeg";
import Searchicon from "../assets/searchicon";
import Menuicon from "../assets/menuicon";
import Sidebar from "../Sidebar/Sidebar";
function Navbar({open, setopen}){
    function clickhandler(){
        setopen(!open);
    }
    return (
        <div className="relative">
        <div className="flex flex-row justify-between h-20 w-full bg-black px-3 z-10">
            <div className="my-auto hover:cursor-pointer"> 
                <Menuicon clickhandler={(event)=>{
                    event.stopPropagation();
                    clickhandler();
                }}/>
            </div>
            <div className="h-20 w-20">
                <img src={nasa_logo} alt="nasa_logo"/>
            </div>
            <div className="my-auto">
                <Searchicon/>
            </div>

        </div>
        {open && <div className="absolute z-20">
            <Sidebar/>
        </div>}
        </div>
    )
}
export default Navbar;