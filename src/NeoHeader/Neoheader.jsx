function Neoheader(){
    return(
        <div className="w-full h-14">
            <div className="flex flex-row justify-around w-full h-full items-center bg-gray-600">
                <div className="basis-2/12 pl-2 text-xl font-mono text-white">Name</div>
                <div className="basis-2/12 pl-2 text-xl font-mono text-white">Diameter(km)</div>
                <div className="basis-3/12 pl-2 text-xl font-mono text-white">Close approach date</div>
                <div className="basis-3/12 pl-2 text-xl font-mono text-white">Relative Velocity(kmh)</div>
                <div className="basis-2/12 pl-2 text-xl font-mono text-white">Miss Distance(km)</div>
            </div>
        </div>
    )
}
export default Neoheader;