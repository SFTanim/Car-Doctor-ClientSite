import { useLoaderData } from "react-router-dom";






const ServiceCardDetails = () => {
    const service = useLoaderData()
    return (
        <div className="py-10">
            <div className="hero min-h-screen bg-base-200 p-2 lg:p-10 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row space-x-10">
                    <div className="flex-1">
                        <img src={service.img} className=" rounded-lg shadow-2xl" />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-5xl font-bold">{service.title}</h1>
                        <p className="pt-4"><span className="font-bold text-xl">Details :</span>{service.description}</p>
                        <p className="pb-2"><span className="font-bold text-xl">Price :</span>${service.price}</p>
                        <h2 className="textxl"><span className="font-bold text-xl">Facility :</span> </h2>
                        <ul className="ml-10 list-disc">
                            {
                                service?.facility?.map((fec, idx) => <li key={idx}>{fec.name}</li>)
                            }
                        </ul>
                        <button className="btn btn-primary mt-6">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCardDetails;