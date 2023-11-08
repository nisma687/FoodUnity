import { useContext, useEffect, useState } from "react";
import useAxiosHook from "../../hooks/UseAxiosHook";
import FoodRequestCard from "./FoodRequestCard";
import { Table } from 'flowbite-react';
import { AuthContext } from "../../provider/AuthProvider";

const FoodRequest = () => {
    const axiosSecure=useAxiosHook();
    const {user}=useContext(AuthContext);
    const [req,setreq]=useState([]);
    useEffect(()=>{
        axiosSecure.get(`/requestfood?donorName=${user.displayName}`)
        .then(res=>{
            console.log(res.data);
            setreq(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    return (
        <div>
            <h3 className="text-xl text-center">This is All the foods were requested</h3>
           <div className="mt-4 mb-4">
           <Table hoverable>
      <Table.Head>
        <Table.HeadCell>Product name</Table.HeadCell>
        <Table.HeadCell>Color</Table.HeadCell>
        <Table.HeadCell>Category</Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
      {
                req.map(food=>
                    <FoodRequestCard key={food._id} food={food} />)
        }
       
      </Table.Body>
    </Table>
           
           </div>
        </div>
    );
};

export default FoodRequest;