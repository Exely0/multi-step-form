import Counter from "./Counter";
import FormP1 from "./FormP1";
import FormP2 from "./FormP2";
import FormP3 from "./FormP3";
import FormP4 from "./FormP4";
import BottomBar from "./BottomBar";
import IntegratedBar from "./IntegratedBar";

import MobileBGImage from "../multi-step-form-main/assets/images/bg-sidebar-mobile.svg"
import DesktopBGImage from "../multi-step-form-main/assets/images/bg-sidebar-desktop.svg"
import { useState } from "react";


function App() {

  const [completeFormDatas, setCompleteFormDatas] = useState({
    name: null,
    email: null,
    phone: null,
    plan: "arcade",
    paymentInterval: "monthly",
    onlineService : false,
    largerStorage: false,
    customizableProfile: false,
  })

  const handleForm1Complete = (data) => {
    setCompleteFormDatas((prevData) => ({
      ...prevData,
      name: data.name,
      email: data.email,
      phone: data.phone,
    }));
  };

  const handleForm2Complete = (data) => {
    setCompleteFormDatas((prevData) => ({
      ...prevData,
      plan: data.plan,
      paymentInterval: data.paymentInterval,
    }));
  };

  const handleForm3Complete = (data) => {
    setCompleteFormDatas((prevData) => ({
      ...prevData,
      onlineService : data.onlineService,
      largerStorage: data.largerStorage,
      customizableProfile: data.customizableProfile,
    }));
  };

  const [activeState, setActiveState] = useState(1);

  function HandleStateChange(x) {
    setActiveState(x);
  }

  return (
    <div className={` bg-[#E6EDF7] min-h-screen `}>

      <div className="md:hidden min-h-screen">
        <img className=" z-10 top-0 md:hidden w-full h-auto" src={MobileBGImage} alt="background"/>
        <div className=" flex flex-col justify-center items-center gap-6 -mt-40 mb-16 w-full top-10 z-20 px-4 ">
          <Counter onNumberClick={HandleStateChange} currentState={activeState}/>
          <div className={`${activeState !== 1 ? "hidden" : ""}`}>
            <FormP1 submitDatas={handleForm1Complete} />
          </div>
          <div className={`${activeState !== 2 ? "hidden" : ""}`}>
            <FormP2 submitDatas={handleForm2Complete} />
          </div>
          <div className={`${activeState !== 3 ? "hidden" : ""}`}>
            <FormP3 submitDatas={handleForm3Complete} paymentInterval={completeFormDatas.paymentInterval} />
          </div>
          <div className={`${activeState !== 4 ? "hidden" : ""}`}>
            <FormP4 formDatas={completeFormDatas} />
          </div>
        </div>
      </div>
      <BottomBar setState={HandleStateChange} activeNumber={activeState}/>

      <div className="hidden min-h-screen md:flex items-center justify-center">
        <div className=" flex bg-white p-4 pr-6 rounded-xl gap-10 w-[1000px]">
          <div className=" w-[400px] relative">
            <img className=" w-full h-auto" src={DesktopBGImage} alt="background"/>
            <Counter onNumberClick={HandleStateChange} currentState={activeState}/>
          </div>
          <div className=" flex flex-col justify-between items-center gap-10 px-4 w-full">
          <div className={`${activeState !== 1 ? "hidden" : ""}`}>
            <FormP1 submitDatas={handleForm1Complete} />
          </div>
          <div className={`${activeState !== 2 ? "hidden" : ""}`}>
            <FormP2 submitDatas={handleForm2Complete} />
          </div>
          <div className={`${activeState !== 3 ? "hidden" : ""}`}>
            <FormP3 submitDatas={handleForm3Complete} paymentInterval={completeFormDatas.paymentInterval} />
          </div>
          <div className={`${activeState !== 4 ? "hidden" : ""}`}>
            <FormP4 formDatas={completeFormDatas} />
          </div>
            <IntegratedBar setState={HandleStateChange} activeNumber={activeState}/>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
