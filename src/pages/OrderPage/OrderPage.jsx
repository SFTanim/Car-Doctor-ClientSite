import { Link } from 'react-router-dom';
import img1 from '../../assets/assets/images/banner/3.jpg'


const OrderPage = () => {
    return (
        <div>
            <div className="my-6 space-y-6">
                {/* Banner */}
                <div className="carousel-item relative w-full h-[50vh] mb-10">
                    <img src={img1} className="w-full min-h-full overflow-hidden rounded-xl" />
                    <div className="absolute flex items-center pl-20 bg-gradient-to-r from-[#151515] to-[#15151500] font-bold  min-w-full h-full text-white rounded-xl">
                        <div className="">
                            <h2 className="text-5xl mb-5 max-w-lg">Manage All Orders</h2>
                            <Link to="/" className="text-2xl max-w-2xl text-[#FF3811]">Home - Manage All Orders</Link>
                        </div>
                    </div>
                </div>

                {/* Cart Card */}
                <div className="space-y-8">

                    <div className="flex flex-col lg:flex-row max-h-full lg:max-h-32 items-center justify-evenly shadow-xl rounded-xl p-4 space-y-3">
                        <div className="flex space-x-4 items-center">
                            <img className="h-28 m-4 rounded-2xl" src="https://i.ibb.co/T2cpBd5/888.jpg" alt="" />
                            <div className="">
                                <h2 className="text-2xl font-bold">Title</h2>
                                <p className="">Description</p>
                            </div>
                        </div>
                        <h2 className="text-2xl">$00.00</h2>
                        <h2 className="text-2xl">23-12-2024</h2>
                        <div className="space-x-3">
                            <button className="btn">X</button>
                            <button className="btn">Pending</button>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row max-h-full lg:max-h-32 items-center justify-evenly shadow-xl rounded-xl p-4 space-y-3">
                        <div className="flex space-x-4 items-center">
                            <img className="h-28 m-4 rounded-2xl" src="https://i.ibb.co/T2cpBd5/888.jpg" alt="" />
                            <div className="">
                                <h2 className="text-2xl font-bold">Title</h2>
                                <p className="">Description</p>
                            </div>
                        </div>
                        <h2 className="text-2xl">$00.00</h2>
                        <h2 className="text-2xl">23-12-2024</h2>
                        <div className="space-x-3">
                            <button className="btn">X</button>
                            <button className="btn">Pending</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;