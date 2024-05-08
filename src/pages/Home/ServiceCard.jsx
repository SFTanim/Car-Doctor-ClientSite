import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const ServiceCard = ({ service }) => {
    const { title, price, img, _id } = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="px-10 pt-10 ">
                    <img src={img} alt="Shoes" className="rounded-xl min-h-full" />
                </div>
                <div className="card-body items-left text-left">
                    <h2 className="card-title">{title}</h2>
                    <p>Price: ${price}</p>
                    <div className="card-actions">
                        <Link to={`/checkOut/${_id}`} className="btn btn-primary">Book Now</Link>
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