import { useState } from "react";

function FormP3({ submitDatas, paymentInterval }) {

    const [formData, setFormData] = useState({
        onlineService : false,
        largerStorage: false,
        customizableProfile: false,
    });

    const formLayout = [
        {
            key: "onlineService",
            label: "Online Service",
            text: "Access to multiplayer games",
            pricePerMonth: "+$1/mo",
            pricePerYear: "+$10/yr",
        },
        {
            key: "largerStorage",
            label: "Larger Storage",
            text: "Extra 1TB of cloud save",
            pricePerMonth: "+$2/mo",
            pricePerYear: "+$20/yr",
        },
        {
            key: "customizableProfile",
            label: "Customizable Profile",
            text: "Custom theme on your profile",
            pricePerMonth: "+$2/mo",
            pricePerYear: "+$20/yr",
        },
    ];

    const handleSubmit = (datas) => {
        submitDatas(datas);
    };

    function handleCheckboxChange(option) {
        const newFormData = {...formData};
        newFormData[option] = !newFormData[option];
        setFormData(newFormData);
        handleSubmit(newFormData)
    }

    return (
        <div className=" bg-white rounded-lg shadow-lg px-4 py-8 flex gap-8 items-center justify-center md:shadow-none w-[375px] md:w-[500px]">
            <div>
                <h2 className=" text-2xl text-blue-950 font-semibold mb-4">Pick add-ons</h2>
                <p className=" text-gray-600 mb-4">Add-ons help enhance your gaming experience.</p>

                <div className=" space-y-4">
                {formLayout.map(({ key, label, text, pricePerMonth, pricePerYear }) => (
                <label
                    key={key}
                    className={` flex items-center gap-6 hover:scale-105 transition-all p-4 hover:cursor-pointer w-full border rounded-md ${
                        formData.key  ? "border-blue-950 bg-gray-100" : "border-gray-300 bg-white"
                    }`}     
                >

                    <input
                        type="checkbox"
                        checked={formData[key]}
                        value={key}
                        onChange={() => handleCheckboxChange(key)}
                    />

                    <div className="grow">
                        <div className=" text-blue-950 font-semibold">
                            {label}
                        </div>
                        <div className=" text-gray-500 text-sm">
                            {text}
                        </div>
                    </div>

                    <div className=" text-blue-950">
                        {paymentInterval === "monthly" ? pricePerMonth : pricePerYear}
                    </div>
                    
                </label>
                ))}

                </div>
            </div>
        </div>
    );
}

export default FormP3;