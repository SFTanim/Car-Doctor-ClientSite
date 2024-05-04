import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";



const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="my-10">
            <div className="text-center">
                <p className="mb-6 text-red-600 text-xl font-bold">Service</p>
                <h2 className="text-5xl font-bold">Our Service Area</h2>
                <p className="max-w-3xl mx-auto py-4">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
                {
                    services?.map((service)=><ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;