import { useContext } from "react";
import useAxiosHook from "../../hooks/UseAxiosHook";
import Swal from 'sweetalert2';
import { AuthContext } from "../../provider/AuthProvider";


const AddFoods = () => {
    const axiosSecure=useAxiosHook();
    const {user}=useContext(AuthContext);
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
        const status=form.status.value;
        console.log(foodName,
            status,
            foodImgUrl,donorImgUrl,donorName,quantity,location,expiredDate,additionalNotes);
        const food={
            foodName,
            status,
            foodImgUrl,
            donorImgUrl,
            donorName,
            quantity,
            location,
            expiredDate,
            additionalNotes
        }
        axiosSecure.post('/addfood',food)
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
            <h2 className="text-4xl font-extrabold text-center text-purple-600 mb-4">FooD Insertion</h2>
            <form onSubmit={handleAddFood}>
        
            <div className="md:flex mb-8">

            <div className="form-control md:w-1/2">
                <label className="label">
            <span className="label-text">Food Name</span>
                </label>
            <label className="input-group">
             
        <input type="text" placeholder="Food Name" 
        name="foodName"
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
            <span className="label-text">Status</span>
                </label>
            <label className="input-group">
             
        <input type="text" placeholder="Status"
        defaultValue={"Available"}
        name="status"
        className="input input-bordered w-full" />
            </label>
            </div>

            

            </div>

            

        <input className="btn
         btn-block bg-black text-white"
         type="submit" value="Add Food"/>




        </form>
        </div>
    );
};

export default AddFoods;