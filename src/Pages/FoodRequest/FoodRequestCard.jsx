import { Table } from 'flowbite-react';

import useAxiosHook from '../../hooks/UseAxiosHook';

import Swal from 'sweetalert2'

const FoodRequestCard = ({food}) => {
    const axiosSecure=useAxiosHook();
    const {
       expiredDate,
        
       status,donorName,donationAmount,location,
        requestDate,_id


    }=food;
    const handleDelete=()=>{
        console.log(_id);
        const id=_id;
        
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              axiosSecure.delete(`/requestfood/${id}`)
        
          .then(res=>{
          console.log('successfully deleted',res);
            window.location.reload();
          })

           
            }
          });
          
          
      
       
       
    }
    return (
    
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {donorName}
        </Table.Cell>
        <Table.Cell>{location}</Table.Cell>
        <Table.Cell>{expiredDate}</Table.Cell>
        <Table.Cell>{donationAmount}</Table.Cell>
        <Table.Cell>{requestDate}</Table.Cell>
        <Table.Cell>{status}</Table.Cell>
        <Table.Cell>
          <button
          onClick={handleDelete}
            className="btn btn-sm btn-ghost btn-square text-red-500 hover:bg-red-500 hover:text-white   dark:hover:bg-red-500 dark:hover:text-white"
            
          >
          X
          </button>
        </Table.Cell>
      </Table.Row>
     
    );
};

export default FoodRequestCard;