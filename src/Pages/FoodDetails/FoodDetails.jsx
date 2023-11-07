import { useLoaderData } from "react-router-dom";
// import useAxiosHook from "../../hooks/UseAxiosHook";


const FoodDetails = () => {
    const data=useLoaderData();
    console.log(data);
    // const axiosSecure=useAxiosHook();
    // const handleDetails=()=>{
    //     const id=_id;
    //     console.log(id);
    //     axiosSecure.get(`/featured/${id}`)
    //     .then(res=>{
    //       console.log(res.data);
    //     })
       
    //   }
    const {additionalNotes,donator,expiredDateTime,
        foodImage,foodName,foodQuantity,pickupLocation

    }=data;
    return (
        <div className="mt-2 mb-4 mr-5 text-center">
            <p className="text-2xl text-center mt-4 mb-4">This is Food Details</p>
         <div>
            <img src={foodImage} alt="food
             image loading..."
                className='object-cover w-80 h-80 mx-auto '
              />
              <p className="text-2xl"> Name of this food:
                {foodName}
              </p>
                <p className="text-2xl"> Quantity of this food:
                    {foodQuantity}
                </p>
                <p className="text-2xl"> Pickup Location of this food:
                    {pickupLocation}
                </p>
                <p className="text-2xl"> Additional Notes of this food:
                    {additionalNotes}
                </p>
                <p className="text-2xl"> Expired Date of this food:
                    {expiredDateTime}
                </p>
                <img src={donator.donatorImage} alt="" 
                className="object-cover w-40 h-40 mx-auto "
                />
                <p className="text-2xl"> Donator of this food:
                    {donator.donatorName}
                </p>
               
         </div>
        </div>
    );
};

export default FoodDetails;