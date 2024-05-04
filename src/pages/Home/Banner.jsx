import img1 from '../../assets/assets/images/banner/1.jpg'
import img2 from '../../assets/assets/images/banner/2.jpg'
import img3 from '../../assets/assets/images/banner/3.jpg'
import img4 from '../../assets/assets/images/banner/4.jpg'


const Banner = () => {
    return (
        <div className='my-6'>
            <div className="carousel w-full h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full rounded-xl" />
                    <div className="absolute flex items-center pl-20 bg-gradient-to-r from-[#151515] to-[#15151500] font-bold  min-w-full h-full text-white rounded-xl">
                        <div className="space-y-10">
                            <h2 className="text-7xl max-w-lg">Affordable Price For Car Servicing</h2>
                            <p className="text-2xl max-w-2xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="space-x-4">
                                <button className="btn btn-error text-lg font-bold">Discover More</button>
                                <button className="btn btn-outline btn-accent text-lg font-bold">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex transform space-x-3 -translate-y-1/2 right-10 bottom-10">
                        <a href="#slide4" className="btn btn-circle bg-neutral text-white border-0">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-yellow-400 text-black border-0">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full rounded-xl" />
                    <div className="absolute flex items-center pl-20 bg-gradient-to-r from-[#151515] to-[#15151500] font-bold  min-w-full h-full text-white rounded-xl">
                        <div className="space-y-10">
                            <h2 className="text-7xl max-w-lg">Affordable Price For Car Servicing</h2>
                            <p className="text-2xl max-w-2xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="space-x-4">
                                <button className="btn btn-error text-lg font-bold">Discover More</button>
                                <button className="btn btn-outline btn-accent text-lg font-bold">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex transform space-x-3 -translate-y-1/2 right-10 bottom-10">
                        <a href="#slide1" className="btn btn-circle bg-neutral text-white border-0">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-yellow-400 text-black border-0">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full rounded-xl" />
                    <div className="absolute flex items-center pl-20 bg-gradient-to-r from-[#151515] to-[#15151500] font-bold  min-w-full h-full text-white rounded-xl">
                        <div className="space-y-10">
                            <h2 className="text-7xl max-w-lg">Affordable Price For Car Servicing</h2>
                            <p className="text-2xl max-w-2xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="space-x-4">
                                <button className="btn btn-error text-lg font-bold">Discover More</button>
                                <button className="btn btn-outline btn-accent text-lg font-bold">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex transform space-x-3 -translate-y-1/2 right-10 bottom-10">
                        <a href="#slide2" className="btn btn-circle bg-neutral text-white border-0">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-yellow-400 text-black border-0">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full rounded-xl" />
                    <div className="absolute flex items-center pl-20 bg-gradient-to-r from-[#151515] to-[#15151500] font-bold  min-w-full h-full text-white rounded-xl">
                        <div className="space-y-10">
                            <h2 className="text-7xl max-w-lg">Affordable Price For Car Servicing</h2>
                            <p className="text-2xl max-w-2xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="space-x-4">
                                <button className="btn btn-error text-lg font-bold">Discover More</button>
                                <button className="btn btn-outline btn-accent text-lg font-bold">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex transform space-x-3 -translate-y-1/2 right-10 bottom-10">
                        <a href="#slide3" className="btn btn-circle bg-neutral text-white border-0">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-yellow-400 text-black border-0">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;