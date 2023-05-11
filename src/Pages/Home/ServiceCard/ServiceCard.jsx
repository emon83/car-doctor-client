import { Link } from 'react-router-dom';
import './ServiceCard.css'
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({service}) => {
    const {_id, img, title, price} = service;
  return (
    <div className="card card-compact w-full bg-base-100 pt-6 pl-6 pr-6 border-2">
      <figure>
        <img
          src={img}
          className='h-52'
          alt="Service"
        />
      </figure>
      <div className='flex mb-0'>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <p className="text-lg font-bold text-orange-600">Price: ${price}</p>
      </div>
      <div>
        <Link to={`/checkout/${_id}`}>
          <FaArrowRight className='text-orange-600 w-5 h-5 mt-16'/>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default ServiceCard;
