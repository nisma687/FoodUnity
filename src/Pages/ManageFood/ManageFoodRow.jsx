
import Swal from 'sweetalert2'
import { Table } from 'flowbite-react';
import {LiaEdit} from 'react-icons/lia';
import useAxiosHook from '../../hooks/UseAxiosHook';
const ManageFoodRow = ({food}) => {
  const axiosSecure=useAxiosHook();
  const {additionalNotes,donatorImage,expiredDateTime,
    foodImage,foodName,foodQuantity,pickupLocation,_id
  ,donatorName,donorName
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
              axiosSecure.delete(`/featured/${id}`)
        
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
    {donatorName?donatorName:donorName}
    </Table.Cell>
    <Table.Cell>{pickupLocation}</Table.Cell>
    <Table.Cell>{foodQuantity}</Table.Cell>
    <Table.Cell>{foodName}</Table.Cell>
    
    <Table.Cell>{expiredDateTime}</Table.Cell>
   
    <Table.Cell>
      <button
      // onClick={handleDelete}
        className="btn btn-sm btn-ghost btn-square text-green-500 hover:bg-green-500 hover:text-white   dark:hover:bg-green-500 dark:hover:text-white"
        
      >
      <LiaEdit/>
      </button>
    </Table.Cell>
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

export default ManageFoodRow;