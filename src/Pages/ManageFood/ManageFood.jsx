

import { useEffect, useState } from 'react';

import useAxiosHook from '../../hooks/UseAxiosHook';
import { Table } from 'flowbite-react';

import ManageFoodRow from './ManageFoodRow';

const ManageFood = () => {
    const [foods, setFoods] = useState([]);
    const axiosSecure=useAxiosHook();
    useEffect(()=>{
        axiosSecure.get('/featured')
        .then(res=>{
            setFoods(res.data);
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
  
    

    return (
        <div>
            <h2 className="text-2xl text-center">This is for managing foods</h2>
            <div className="mt-4 mb-4">
            <Table hoverable>
      <Table.Head>
        <Table.HeadCell>Donor Name</Table.HeadCell>
        <Table.HeadCell>Location</Table.HeadCell>
        <Table.HeadCell>Quantity</Table.HeadCell>
        
        <Table.HeadCell>Food Name</Table.HeadCell>
        <Table.HeadCell>Request Date</Table.HeadCell>

        <Table.HeadCell>
          <span className="">Edit</span>
        </Table.HeadCell>
        <Table.HeadCell>
          <span className="">Delete</span>
        </Table.HeadCell>
       

      </Table.Head>
      <Table.Body className="divide-y">
        {
                    foods.map(food=>
                        <ManageFoodRow key={food._id} food={food} />)
            }
      </Table.Body>
    </Table>
           
           </div>
        </div>
    );
};

export default ManageFood;