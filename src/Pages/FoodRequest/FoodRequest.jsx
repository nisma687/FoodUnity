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
      const email=user?.email;
      console.log(email);
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
        <Table.HeadCell>Donor Name</Table.HeadCell>
        <Table.HeadCell>Location</Table.HeadCell>
        <Table.HeadCell>Expired Date</Table.HeadCell>
        <Table.HeadCell>Donation Amount</Table.HeadCell>
        <Table.HeadCell>Request Date</Table.HeadCell>
        <Table.HeadCell>Status</Table.HeadCell>

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