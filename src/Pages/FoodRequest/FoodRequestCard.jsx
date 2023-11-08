import { Table } from 'flowbite-react';
import useAxiosHook from '../../hooks/UseAxiosHook';

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
        axiosSecure.delete(`/requestfood/${id}`)
        .then(res=>{
            console.log('successfully deleted',res);
        })
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