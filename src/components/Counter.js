function Counter({ onNumberClick, currentState }) {

    const numbers = [1, 2, 3, 4]

    const counterForDesktop = [
      {
        number: 1,
        step: "Step 1",
        title: "Your info",
      },
      {
        number: 2,
        step: "Step 2",
        title: "Select plan",
      },
      {
        number: 3,
        step: "Step 3",
        title: "Add-ons",
      },
      {
        number: 4,
        step: "Step 4",
        title: "Summary",
      },
    ]

    return (
      <div>
        <div className=" z-30 h-10 w-[300px] flex items-center justify-evenly md:hidden">
        {numbers.map((number) => (
          <div key={number} onClick={() => onNumberClick(number)} className={` hover:bg-blue-400 hover:cursor-pointer h-10 w-10 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold ${currentState === number ? "bg-blue-950 hover:bg-blue-950" : ""}`} >{number}</div>
        ))}
      </div>

        <div className=" z-30 md:block hidden space-y-6 absolute top-10 left-10">
          {counterForDesktop.map(({number, step, title}) => (
            <div key={number}  className={`flex items-center gap-6`} >

              <div onClick={() => onNumberClick(number)} className={` hover:bg-blue-400 hover:cursor-pointer h-10 w-10 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold ${currentState === number ? "bg-blue-950 hover:bg-blue-950" : ""}`}>
                {number}
              </div>

              <div className=" text-white">
                <div className=" uppercase">
                  {step}
                </div>
                <div className=" uppercase font-semibold">
                  {title}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      
    );
  }
  
  export default Counter;
  