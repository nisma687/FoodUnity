import { useParams } from "react-router-dom";
import useAxiosHook from "../../hooks/UseAxiosHook";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2';

const Update = () => {
    const {id} = useParams();
    console.log(id);
    const axiosSecure=useAxiosHook();
    const [food,setFood]=useState({});
    useEffect(()=>{
        axiosSecure.get(`/featured/${id}`)
        .then(res=>{
            console.log(res.data);
            setFood(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    const {user}=useContext(AuthContext);
    const handleUpdateFood=(e)=>
       {
        e.preventDefault();
        const form=e.target;
        const foodName=form.foodName.value;
        const foodImage=form.foodImgUrl.value;
        const donorImage=form.donorImgUrl.value;
        const donorName=form.donorName.value;
        const foodQuantity=form.quantity.value;
        const pickupLocation=form.location.value;
        const expiredDateTime=form.expiredDate.value;
        const additionalNotes=form.additionalNotes.value;
        const status=form.status.value;
        console.log(foodName,
            status,
            donorName,pickupLocation,additionalNotes,
            expiredDateTime,foodImage,foodQuantity,
            donorImage);
            
        const food={
            foodName,
            status,
            foodQuantity,
            donorName,
            foodImage,
            pickupLocation,
            expiredDateTime,
            additionalNotes
        }
        axiosSecure.patch(`/featured/${id}`,food)
        .then(res=>{
            console.log(res);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
            // alert("Food Added Successfully");
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
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-4xl font-extrabold text-center text-purple-600 mb-4">
            FooD Update</h2>
        
        
        
        <form onSubmit={handleUpdateFood}>
    
        <div className="md:flex mb-8">

        <div className="form-control md:w-1/2">
            <label className="label">
        <span className="label-text">Food Name</span>
            </label>
        <label className="input-group">
         
    <input type="text" placeholder="Food Name" 
    name="foodName"
    defaultValue={food?.foodName}
    className="input input-bordered w-full" />
        </label>
        </div>

        <div className="form-control md:w-1/2 ml-4">
            <label className="label">
        <span className="label-text">Food Image Url </span>
            </label>
        <label className="input-group">
         
    <input type="text" placeholder="Food Image Url" 
    name="foodImgUrl"
    defaultValue={food?.foodImage}
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
    defaultValue={user?.photoURL}
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
    defaultValue={user?.displayName}
    name="donorName"
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
    defaultValue={food?.foodQuantity}
    className="input input-bordered w-full" />
        </label>
        </div>

        <div className="form-control md:w-1/2 ml-4">
            <label className="label">
        <span className="label-text">Pick Up Locations </span>
            </label>
        <label className="input-group">
         
    <input type="text" placeholder="Pick Up Locations" 
    name="location"
    defaultValue={food?.pickupLocation}
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
    defaultValue={food?.expiredDateTime}
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
    defaultValue={food?.additionalNotes}
    className="input input-bordered w-full" />
        </label>
        </div>
        <div className="form-control w-full">
            <label className="label">
        <span className="label-text">Status</span>
            </label>
        <label className="input-group">
         
    <input type="text" placeholder="Status"
    defaultValue={food?.status}
    name="status"
    className="input input-bordered w-full" />
        </label>
        </div>

        

        </div>

        

    <input className="btn
     btn-block bg-black text-white"
     type="submit" value="Update  Food"/>




    </form>
    </div>
    );
};

export default Update;