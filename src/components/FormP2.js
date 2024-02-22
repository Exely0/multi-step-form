import { useState } from "react";
import ArcadeImage from "../multi-step-form-main/assets/images/icon-arcade.svg"
import AdvancedImage from "../multi-step-form-main/assets/images/icon-advanced.svg"
import ProImage from "../multi-step-form-main/assets/images/icon-pro.svg"



function FormP2( {submitDatas} ) {

    const [localDatas, setLocalDatas] = useState({
        plan: "arcade",
        paymentInterval: "monthly",
    })

    const pricesPerMonth = {
        arcade: "$9/mo",
        advanced: "$12/mo",
        pro: "$15/mo",
    }

    const pricesPerYear = {
        arcade: "$90/yr",
        advanced: "$120/yr",
        pro: "$150/yr",
    }

    const plans = [
        {
            key: "arcade",
            label: "Arcade",
            image: ArcadeImage,
        },
        {
            key: "advanced",
            label: "Advanced",
            image: AdvancedImage,
        },
        {
            key: "pro",
            label: "Pro",
            image: ProImage,
        },
    ];

    const handleSubmit = (datas) => {
        submitDatas(datas);
    };

    function handleCheckboxChange(option) {
        const newLocalDatas = {...localDatas};
        newLocalDatas.plan = option;
        setLocalDatas(newLocalDatas);
        handleSubmit(newLocalDatas)
    }

    function handlePaymentIntervalChange() {
        
        const newLocalDatas = {...localDatas};

        switch(newLocalDatas.paymentInterval) {
            case "monthly":
                newLocalDatas.paymentInterval = "yearly";
                break;
            case "yearly":
                newLocalDatas.paymentInterval = "monthly"
                break;
            default:
                newLocalDatas.paymentInterval = "monthly"
                break;
        }
        setLocalDatas(newLocalDatas);
        handleSubmit(newLocalDatas)
    }


    return (
        <div className=" bg-white rounded-lg shadow-lg px-4 py-8 md:shadow-none w-[375px] md:w-[500px]">
            <h2 className=" text-2xl text-blue-950 font-semibold mb-4">Select your plan</h2>
            <p className=" text-gray-600 mb-4">You have the option of monthly or yearly billing.</p>


            <div className=" flex flex-col gap-4 md:flex-row">
                {plans.map(({ key, label, image }) => (
                <label
                    key={key}
                    className={` hover:scale-105 transition-all p-4 hover:cursor-pointer inline-block w-full border rounded-md ${
                        localDatas.plan === key ? "border-blue-950 bg-gray-100" : "border-gray-300 bg-white"
                    }`}
                >
                    <div className="flex md:flex-col items-center h-full gap-4">
                        <div className="w-10 flex">
                            <img className="w-full h-auto" src={image} alt={key} />
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-blue-950">{label}</p>
                            <p>{localDatas.paymentInterval === "monthly" ? pricesPerMonth[key] : pricesPerYear[key]}</p>
                        </div>
                        <div className={`hidden md:block ${!localDatas.paymentInterval === "yearly" ? "!hidden" : ""}`}>
                            <div>
                                <p className="text-blue-950">2 months free</p>
                            </div>
                        </div>
                    </div>
                    <div className={`flex gap-4 md:hidden ${!localDatas.paymentInterval === "yearly" ? "!hidden" : ""}`}>
                        <div className="w-10 md:hidden"></div>
                        <div>
                            <p className="text-blue-950">2 months free</p>
                        </div>
                    </div>
                    <input
                        type="checkbox"
                        checked={localDatas.plan === key}
                        value={key}
                        onChange={() => handleCheckboxChange(key)}
                        className="hidden"
                    />
                </label>
                ))}
            </div>

            <div className=" flex items-center justify-center gap-6 mt-10 bg-gray-200 p-4 rounded-md transition-colors">
                <p className={`${localDatas.paymentInterval === "monthly" ? "text-blue-950" : "text-gray-500"}  text-xl font-semibold`}>Monthly</p>
                <label className=" hover:cursor-pointer inline-block h-8 p-1 w-16 bg-blue-950 rounded-3xl">
                    <div className={` h-6 w-6 bg-white rounded-full transition-transform ${localDatas.paymentInterval === "yearly" ? " translate-x-[32px]" : "translate-x-0"}`}></div>
                    <input type="checkbox" value="payment interval" onChange={() => handlePaymentIntervalChange()}  className=" hidden"/>
                </label>
                <p className={`${localDatas.paymentInterval === "yearly" ? "text-blue-950" : "text-gray-500"}  text-xl font-semibold`}>Yearly</p>
            </div>

        </div>
    );
}

export default FormP2;