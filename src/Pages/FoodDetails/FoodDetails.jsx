import {  useLoaderData } from "react-router-dom";
import useAxiosHook from "../../hooks/UseAxiosHook";
// import useAxiosHook from "../../hooks/UseAxiosHook";

import Swal from 'sweetalert2';


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
    const axiosSecure=useAxiosHook();
    const handleAddFood=(e)=>
    {
     e.preventDefault();
     const form=e.target;
     const foodName=form.foodName.value;
     const foodImgUrl=form.foodImgUrl.value;
     const donorImgUrl=form.donorImgUrl.value;
     const donorName=form.donorName.value;
     const quantity=form.quantity.value;
     const location=form.location.value;
     const expiredDate=form.expiredDate.value;
     const additionalNotes=form.additionalNotes.value;
     const donationAmount=form.donationAmount.value;
     console.log(foodName,foodImgUrl,donorImgUrl,donorName,quantity,location,expiredDate,additionalNotes,donationAmount);
     const food={
         foodName,
         foodImgUrl,
         donationAmount,
         donorImgUrl,
         donorName,
         quantity,
         location,
         expiredDate,
         additionalNotes
     }
     axiosSecure.post('/requestfood',food)
     .then(res=>{
         console.log(res);
            Swal.fire({
                title: 'Success!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
    
         
     })
     .catch(err=>{
         console.log(err);
         Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
     })


    }
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
              {/* Open the modal using document.getElementById('ID').showModal() method */}
    <button className="btn"
     onClick={()=>document.getElementById('my_modal_5').showModal()}>
     Request</button>
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <form onSubmit={handleAddFood}>
        
        <div className="md:flex mb-8">

        <div className="form-control md:w-1/2">
            <label className="label">
        <span className="label-text">Food Name</span>
            </label>
        <label className="input-group">
         
    <input type="text" placeholder="Food Name" 
    name="foodName"
    value={foodName}
    className="input input-bordered w-full" />
        </label>
        </div>

        <div className="form-control md:w-1/2 ml-4">
            <label className="label">
        <span className="label-text">Food Image Url </span>
            </label>
        <label className="input-group">
         
    <input type="text" placeholder="Food Image Url" 
    value={foodImage}
    name="foodImgUrl"
    className="input input-bordered w-full" />
        </label>
        </div>


        </div>
       
        <div className="md:flex mb-8">

        <div className="form-control md:w-1/2">
            <label className="label">
        <span className="label-text">Donor Image Url </span>
            </label>
        <label className="input-group">
         
    <input type="text" placeholder="Donor Image Url" 
    value={donator.donatorImage}
    name="donorImgUrl"
    className="input input-bordered w-full" />
        </label>
        </div>

        <div className="form-control md:w-1/2 ml-4">
            <label className="label">
        <span className="label-text">Donor Name </span>
            </label>
        <label className="input-group">
         
    <input type="text" placeholder="Donor Name" 
    name="donorName"
    value={donator.donatorName}
    className="input input-bordered w-full" />
        </label>
        </div>


        </div>
        {/* form row 2*/}
        <div className="md:flex mb-8">

        <div className="form-control md:w-1/2">
            <label className="label">
        <span className="label-text">Quantity</span>
            </label>
        <label className="input-group">
         
    <input type="text" placeholder="Quantity" 
    name="quantity"
    value={foodQuantity}
    className="input input-bordered w-full" />
        </label>
        </div>

        <div className="form-control md:w-1/2 ml-4">
            <label className="label">
        <span className="label-text">Pick Up Locations </span>
            </label>
        <label className="input-group">
         
    <input type="text" placeholder="Pick Up Locations" 
    value={pickupLocation}
    name="location"
    className="input input-bordered w-full" />
        </label>
        </div>


        </div>

        <div className="md:flex mb-8">

        <div className="form-control w-full">
            <label className="label">
        <span className="label-text">Expired Date</span>
            </label>
        <label className="input-group">
         
    <input type="text" placeholder="Expired Date" 
    name="expiredDate"
    value={expiredDateTime}
    className="input input-bordered w-full" />
        </label>
        </div>
        </div>
        {/* form row photo url*/}
        <div className="mb-8">

        <div className="form-control w-full">
            <label className="label">
        <span className="label-text">Additional Notes</span>
            </label>
        <label className="input-group">
         
    <input type="text" placeholder="Additional Notes" 
    name="additionalNotes"
    className="input input-bordered w-full" />
        </label>
        </div>
        <div className="form-control w-full">
            <label className="label">
        <span className="label-text">Donation Amount</span>
            </label>
        <label className="input-group">
         
    <input type="text" placeholder="Donation Amount" 
    name="donationAmount"
    required
    className="input input-bordered w-full" />
        </label>
        </div>

        

        </div>

        <button 
        type="submit"
        className="btn">Request</button>


    </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
         </div>
        </div>
    );
};

export default FoodDetails;