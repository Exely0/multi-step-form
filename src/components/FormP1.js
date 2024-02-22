import { useState } from "react";

function FormP1({ submitDatas }) {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const [emailValide, setEmailValide] = useState(null);

    const isEmailValide = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailValide(regex.test(email));
    };

    const handleSubmit = (datas) => {
        submitDatas(datas);
    };

    const handleInputChange = (field, value) => {
        console.log("hi")

        if(field === "email" && value !== "") {
            isEmailValide(value);
        }

        const newDatas = {
            ...formData,
            [field]: value,
        }
        setFormData(newDatas);
        handleSubmit(newDatas);
    };

    

    const formLayout = [
        {
            key: "name",
            label: "Name",
            placeholder: "e.g. Stephen King",
            value: formData.name,
        },
        {
            key: "email",
            label: "Email adress",
            placeholder: "e.g. stephenking@lorem.com",
            value: formData.email,
        },
        {
            key: "phone",
            label: "Phone Number",
            placeholder: "e.g. +1 234 567 890",
            value: formData.phone,
        },
    ];

    return (
        <div className=" bg-white rounded-lg shadow-lg px-4 py-8 flex gap-8 items-center justify-center md:shadow-none w-[375px] md:w-[500px]">

            <div>
                <h2 className=" text-2xl text-blue-950 font-semibold mb-4">Personal Infos</h2>
                <p className=" text-gray-600 mb-4">Please provide your name, email, address, and phone number.</p>

                <div className=" space-y-4">
                    {formLayout.map(({ key, label, placeholder, value }) => (
                        <div key={key} className="flex flex-col">
                            <label className="text-blue-850">{label}</label>
                            <input
                                className={`border border-gray-300 rounded-md px-2 py-2 focus:border-blue-950 outline-none ${key === "email" ? emailValide === false ? " !border-red-700" : "" : "" }`}
                                type="text"
                                placeholder={placeholder}
                                value={value}
                                onChange={(e) => handleInputChange(key, e.target.value)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FormP1;