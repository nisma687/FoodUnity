// import { useState } from "react";
import { Link } from "react-router-dom";


const AllAvailableFoodCard = ({food}) => {
    const {additionalNotes,donatorImage,expiredDateTime,
        foodImage,foodName,foodQuantity,pickupLocation,_id
      ,donatorName
    }=food;
    // const [loading,setLoading]=useState(false);
    return (
        <div>
        
            <div className="card w-96 bg-base-100 shadow-xl">
  

  <figure className="px-10 pt-10">

    <img src={foodImage} alt="loading img" className="rounded-xl" />
    
  </figure>
  
  <div className="card-body items-center text-center">
  <h2 className="card-title">{foodName}</h2>
  <img src={donatorImage}
            className="object-cover w-20 h-20 mx-auto rounded-full"
            alt="avatar"
           />
    
    <p>{donatorName}</p>
    <p>Food Quantity:{foodQuantity}</p>
    <p>Additional Notes:{additionalNotes}</p>
    <p>Expired Date:{expiredDateTime}</p>
    <p>Pickup Location:{pickupLocation}</p>

    <div className="card-actions">
      <Link
        to={`/featured/${_id}`}
       className="btn btn-primary">View Details</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllAvailableFoodCard;