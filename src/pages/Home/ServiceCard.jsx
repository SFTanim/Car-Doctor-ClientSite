import PropTypes from 'prop-types';



const ServiceCard = ({ service }) => {
    const { title,  price, img,  } = service;
    console.log(service)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl min-h-full">
                <div className="px-10 pt-10 border-2 flex-1">
                    <img src={img} alt="Shoes" className="rounded-xl min-h-full" />
                </div>
                <div className="card-body items-left text-left flex-1">
                    <h2 className="card-title">{title}</h2>
                    <p>Price: ${price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Show Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object
}
export default ServiceCard;