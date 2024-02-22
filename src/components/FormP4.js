

function FormP4({ formDatas }) {

    const getPriceWithoutAddOns = () => {
        let price;
        switch(formDatas.plan) {
            case "arcade": {
                price = 9;
                break;
            }
            case "advanced": {
                price = 12;
                break;
            }
            case "pro": {
                price = 15;
                break;
            }
            default: {
                price = null;
                break;
            }
        }
        if(formDatas.paymentInterval === "yearly") {
            price = price * 10;
        }
        return price;
    }

    const getTotalPrice = () => {
        let price;
        price = getPriceWithoutAddOns();
        let addonsPrice = 0;
        if(formDatas.onlineService) {
            addonsPrice += 1;
        }
        if(formDatas.largerStorage) {
            addonsPrice += 2;
        }
        if(formDatas.customizableProfile) {
            addonsPrice += 2;
        }
        if(formDatas.paymentInterval === "yearly") {
            addonsPrice *= 10;
        }
        price += addonsPrice;
        return price;
        
    }

    return (
        <div className=" bg-white rounded-lg shadow-lg px-4 py-8 flex gap-8 items-center justify-center md:shadow-none w-[375px] md:w-[500px]">
            <div>
                <h2 className=" text-2xl text-blue-950 font-semibold mb-4">Finishing up</h2>
                <p className=" text-gray-600 mb-4">Double-check everything looks OK before confirming.</p>

                <div className=" bg-gray-100 px-4 py-5 rounded-xl space-y-4">
                    <div className=" flex justify-between items-center">
                        <div className=" capitalize font-semibold text-blue-950">
                            {formDatas.plan} ({formDatas.paymentInterval})
                        </div>
                        <div className="font-semibold text-blue-950">
                            ${getPriceWithoutAddOns()}{formDatas.paymentInterval === "yearly" ? "/yr" : "/mo"}
                        </div>
                    </div>
                    <div className=" w-4/5 h-[1px] bg-gray-300 mx-auto">
                    </div>

                    <div className={` ${!formDatas.onlineService ? "hidden" : ""} flex items-center justify-between`}>
                        <div className=" capitalize text-gray-500">
                            Online Service
                        </div>
                        <div className=" text-blue-950">
                            ${formDatas.paymentInterval === "yearly" ? "10/yr" : "1/mo"}
                        </div>
                    </div>
                    <div className={` ${!formDatas.largerStorage ? "hidden" : ""} flex items-center justify-between`}>
                        <div className=" capitalize text-gray-500">
                            Larger Storage
                        </div>
                        <div className=" text-blue-950">
                            ${formDatas.paymentInterval === "yearly" ? "20/yr" : "2/mo"}
                        </div>
                    </div>
                    <div className={` ${!formDatas.customizableProfile ? "hidden" : ""} flex items-center justify-between`}>
                        <div className=" capitalize text-gray-500">
                            Customizable Profile
                        </div>
                        <div className=" text-blue-950">
                            ${formDatas.paymentInterval === "yearly" ? "20/yr" : "2/mo"}
                        </div>
                    </div>
                </div>

                <div className=" flex items-center justify-between mt-4 px-4">
                    <div className=" text-gray-500">
                        Total ({formDatas.paymentInterval === "yearly" ? "per year" : "per month"})
                    </div>
                    <div className=" text-lg text-blue-500">
                        ${getTotalPrice()}{formDatas.paymentInterval === "yearly" ? "/yr" : "/mo"}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormP4;