
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
// import useAxiosHook from '../../hooks/UseAxiosHook';

const FeaturedCard = ({food}) => {
  
    const {additionalNotes,donator,expiredDateTime,
        foodImage,foodName,foodQuantity,pickupLocation,_id

    }=food;
    
  
    
    return (
        <div>
            <Card
      className="max-w-sm"
      
    >
        <img src={foodImage} alt="food image loading..." />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {foodName}
      </h5>
      <div className=''>
        
        <p className='text-center'>
        <img src={donator.donatorImage}
            className="object-cover w-20 h-20 mx-auto rounded-full"
            alt="avatar"
           />
          {donator.donatorName}
          </p>

      </div>

      <div className=''>
      <p><span className='text-purple-500 font-semibold'>
        Food Quantity 
        </span>
        : {foodQuantity}</p>
      
      <p><span className='text-purple-500 font-semibold'> PickupLocation :</span>{pickupLocation}</p>
      <p> <span className='text-purple-500 font-semibold'>Additional Notes</span> : {additionalNotes}</p>
      <p className=''> <span className='text-purple-500 font-semibold'>Expired Date </span>: {expiredDateTime}</p>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <div className='text-center'>
      <button>
      <Link
        to={`/featured/${_id}`}
       
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >View Details</Link>
        </button>
      </div>

    </Card>
        </div>
    );

};

export default FeaturedCard;