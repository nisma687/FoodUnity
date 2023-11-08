import { useEffect, useState } from "react";
import useAxiosHook from "../../hooks/UseAxiosHook";
import AllAvailableFoodCard from "./AllAvailableFoodCard";


const AllAvailableFoods = () => {
    const[foods,setfoods]=useState([]);
    const axiosSecure=useAxiosHook();
    const handleSearch=(e)=>{
        e.preventDefault();
        const form=e.target;
        const search=form.search.value;
        console.log(search);
        axiosSecure.get(`/search/${search}`)
        .then(res=>{
            console.log(res.data);
            setfoods(res.data);
        })
        
    
    }
    useEffect(()=>{
        axiosSecure.get('/featured')
        .then(res=>
            {
                console.log(res.data);
                setfoods(res.data);
            }
           );
    },[])
    return (
        <div>
            <div className="text-center mb-2 mt-2 text-xl">

            <h2>Here Are the all available Foods</h2>
            <form onSubmit={handleSearch} >
        

            <input type="search" 
            name="search" id="search"
            placeholder="Search here" className="input input-bordered input-warning w-full max-w-xs" />
            <input type="submit" value="Search" className="btn btn-primary" />
            
            </form>
            </div>
            <div className="grid lg:grid-cols-3
            grid-cols-1 md:grid-cols-2 gap-2">
                {
                    foods.map(food=><AllAvailableFoodCard
                    key={food._id} food={food}>

                    </AllAvailableFoodCard>)
                }
            </div>
        </div>
    );
};

export default AllAvailableFoods;