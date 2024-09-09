import React, { useState } from "react";
import { InventoryItem } from "../../types/inventoryItem";
interface ItemFormProps {
  item?: Partial<Omit<InventoryItem, "id">>;
  onSubmit: (item: Omit<InventoryItem, "id">) => void;
}

const ItemForm: React.FC<ItemFormProps> = ({ item = {}, onSubmit }) => {
  const [name, setName] = useState(item.name || "");
  const [quantity, setQuantity] = useState(item.quantity || 0);
  const [price, setPrice] = useState(item.price || 0);
  const [available, setAvailable] = useState(item.available || false);
  const [addedAt, setAddedAt] = useState<string>(
    item.addedAt ? new Date(item.addedAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
  );


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      quantity,
      price,
      addedAt: new Date(addedAt),
      available,
    });
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="relative z-0 w-full mb-5 group">
        <label className="block mb-2 text-sm font-bold  ">
          Name:
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label className="block mb-2 text-sm font-bold">
          Quantity:
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
          />
        </label>
      </div>
      <div>
        <label className="block mb-2 text-sm font-bold">
          Price:
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </label>
      </div>
      <div>
        <div>
        <label className="block mb-2 text-sm font-bold">
          Date :
          <input
            className="block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            type="date"
            value={addedAt}
            onChange={(e) => setAddedAt(e.target.value)}
            placeholder="DD/MM/YYYY"
            required
          />
        </label>
        </div>
      </div>
      <div>
        <div>
          <label className="mb-2 text-sm font-bold flex gap-2">
            Available:
            <input
              className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              type="checkbox"
              checked={available}
              onChange={(e) => setAvailable(e.target.checked)}
            />
          </label>
        </div>
      </div>

      <div className="mt-4">
        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Send
        </button>
      </div>
    </form>
  );
};

export default ItemForm;
