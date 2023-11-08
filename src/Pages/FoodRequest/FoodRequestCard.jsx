import { Table } from 'flowbite-react';

const FoodRequestCard = ({food}) => {
    const {additionalNotes,
        donator,expiredDateTime,
        foodImage,foodName,foodQuantity,
        pickupLocation,status

    }=food;
    return (
    
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {'Apple MacBook Pro 17"'}
        </Table.Cell>
        <Table.Cell>Sliver</Table.Cell>
        <Table.Cell>Laptop</Table.Cell>
        <Table.Cell>$2999</Table.Cell>
        <Table.Cell>
          <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
            Edit
          </a>
        </Table.Cell>
      </Table.Row>
     
    );
};

export default FoodRequestCard;