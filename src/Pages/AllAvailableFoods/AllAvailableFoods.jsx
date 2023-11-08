import { useEffect, useState } from "react";
import useAxiosHook from "../../hooks/UseAxiosHook";
import AllAvailableFoodCard from "./AllAvailableFoodCard";


const AllAvailableFoods = () => {
    const[foods,setfoods]=useState([]);
    const axiosSecure=useAxiosHook();
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
            <h2>Here Are the all available Foods</h2>
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