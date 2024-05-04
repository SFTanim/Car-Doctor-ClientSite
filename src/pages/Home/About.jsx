import person from '../../assets/assets/images/about_us/person.jpg'
import parts from '../../assets/assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 rounded-xl p-10">
                <div className="hero-content flex-col lg:flex-row justify-evenly">
                    <div className="lg:w-1/2 relative">
                        <img src={person} className="max-w-sm rounded-lg w-3/4 shadow-2xl" />
                        <img src={parts} className="max-w-sm rounded-xl w-1/2 shadow-2xl absolute -bottom-16 right-10 border-8 border-white" />
                    </div>
                    <div className='lg:w-1/2'>
                        <p className="my-10 text-red-600 text-xl font-bold">About Us</p>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
                        <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
                        <button className="btn btn-error text-lg font-bold text-white">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;