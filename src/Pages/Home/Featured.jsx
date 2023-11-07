import { useEffect, useState } from "react";
import {FaStarHalfAlt} from 'react-icons/fa'
import useAxiosHook from "../../hooks/UseAxiosHook";
import FeaturedCard from "./FeaturedCard";
import { Link } from "react-router-dom";
const Featured = () => {
    const axiosSecure=useAxiosHook();
    const [foods,setfoods]=useState([]);
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
        <div className='mt-2 mb-4'>

            <h2 className="text-2xl text-center font-semibold">
                <FaStarHalfAlt className="inline-block text-yellow-500" />
                Featured Foods</h2>
            <div className="mt-2 gap-2 grid
            grid-cols-1 
            lg:grid-cols-3 ">
                {
                    foods.slice(0,5).map(food=><FeaturedCard key={food._id} food={food}/>)
                }

                <Link to="/availfoods"

                className="btn
                bg-purple-600
                 btn-ghost btn-sm btn-block
                  mt-7"
                >Show All Foods</Link>
            </div>
        </div>
    );
};

export default Featured;