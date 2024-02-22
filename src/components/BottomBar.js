function BottomBar({ setState, activeNumber }) {

    return (
        <div className=" md:hidden sticky z-30 bottom-0 w-full flex flex-row-reverse justify-between bg-white p-3 border-t border-black">

            <div onClick={() => setState(activeNumber+1)} className={` flex items-center justify-center bg-blue-950 w-32 py-3 text-white rounded-md hover:cursor-pointer hover:bg-blue-800 ${activeNumber === 4 ? "hidden" : ""}`}>
                Next Step
            </div>

            <input type="submit" value="Submit" className={`bg-blue-950 w-32 py-3 text-white rounded-md hover:cursor-pointer hover:bg-blue-800 ${activeNumber !== 4 ? "hidden" : ""}`}/>

            <div onClick={() => setState(activeNumber-1)} className={`hover:text-blue-950 px-3 py-3 text-gray-500 hover:cursor-pointer ${activeNumber === 1 ? "hidden" : ""}`}>
                Go Back
            </div>
            
        </div>
    )

}

export default BottomBar
