import React from "react";
import { InventoryItem } from "../../types/inventoryItem";
import { Link } from "react-router-dom";
import { useDeleteItem } from "../../hooks/useDeleteItem";
import ButtonDelete from "../ButtonDelete/ButtonDelete";
interface ItemCardProps {
  item: InventoryItem;
  onDelete: (id: number) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onDelete }) => {
  const { removeItem, loading } = useDeleteItem();

  const handleDelete = async () => {
    if (window.confirm("Você tem certeza que deseja deletar este item?")) {
      await removeItem(item.id);
      onDelete(item.id);
    }
  };

  const formatedDate = new Date(new Date(item.addedAt).setHours(new Date(item.addedAt).getHours() + 3)).toLocaleDateString("pt-BR");

  return (
    <div className="border p-4 rounded-md text-white bg-gradient-to-br from-gray-600 to-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium">
      <h2 className="text-xl font-bold">{item.name}</h2>
      <p>Quantity: {item.quantity}</p>
      <p>Price: ${item.price}</p>
      <p>Date: {formatedDate}</p>
      <p>Status: {item.available ? "Available" : "Unavailable"}</p>
      <div className="flex space-x-2 mt-4 justify-between">
        <Link
          to={`/edit/${item.id}`}
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Edit
        </Link>
        <ButtonDelete
          onClick={handleDelete}
          disabled={loading}
          loading={loading}
          color="red"
          text="Delete"
        />
      </div>
    </div>
  );
};

export default ItemCard;
