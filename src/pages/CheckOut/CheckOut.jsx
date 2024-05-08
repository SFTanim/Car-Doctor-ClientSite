import { Link, useLoaderData } from "react-router-dom";
import img1 from '../../assets/assets/images/banner/3.jpg'




const CheckOut = () => {
    const service = useLoaderData()

    console.log(service);
    return (
        <div>
            <div className="carousel-item relative w-full h-[50vh] mb-10">
                <img src={img1} className="w-full min-h-full overflow-hidden rounded-xl" />
                <div className="absolute flex items-center pl-20 bg-gradient-to-r from-[#151515] to-[#15151500] font-bold  min-w-full h-full text-white rounded-xl">
                    <div className="">
                        <h2 className="text-5xl mb-5 max-w-lg">Manage All Orders</h2>
                        <Link to="/" className="text-2xl max-w-2xl text-[#FF3811]">Home - Manage All Orders</Link>
                    </div>
                </div>
            </div>


            <div className="card shrink-0 w-full shadow-2xl bg-base-100 my-10">
                <form className="card-body bg-[#F3F3F3] rounded-3xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-10">
                        <div className="form-control  w-full">
                            <input type="text" placeholder="First Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control  w-full">
                            <input type="text" placeholder="Last Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control  w-full">
                            <input type="number" placeholder="Your Phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control  w-full">
                            <input type="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="form-control w-full">
                            <textarea placeholder="Your Message" name="textarea" className="border-2 rounded-xl" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div className="form-control  w-full mt-6">
                        <button className="btn btn-warning">Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;