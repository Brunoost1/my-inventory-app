import { useLocation } from "react-router-dom";
import { InventoryItem } from "../../types/inventoryItem";
const SearchResults = () => {
  const location = useLocation();
  const { items } = location.state as { items: InventoryItem[] };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Itens:</h2>
      {items && items.length > 0 ? (
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="border p-4 rounded-md text-white bg-gradient-to-br from-gray-600 to-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium"
            >
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <p>
                Date:{" "}
                {new Date(
                  new Date(item.addedAt).setHours(
                    new Date(item.addedAt).getHours() + 3
                  )
                ).toLocaleDateString("pt-BR")}
              </p>

              <p>Status: {item.available ? "Available" : "Unavailable"}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

export default SearchResults;
