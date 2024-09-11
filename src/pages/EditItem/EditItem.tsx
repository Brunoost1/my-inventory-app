import { useParams, useNavigate } from 'react-router-dom';
import { useFetchItems } from '../../hooks/useFetchItems'; 
import { useUpdateItem } from '../../hooks/useUpdateItem';
import ItemForm from '../../components/ItemForm/ItemForm';
import { InventoryItem } from '../../types/inventoryItem';
const EditItem = () => {
  const { id } = useParams<{ id: string }>();
  const { items } = useFetchItems();
  const { updateExistingItem } = useUpdateItem();
  const navigate = useNavigate();

  const item = items.find(item => item.id === Number(id));

  const handleSubmit = async (updatedItem: Partial<Omit<InventoryItem, 'id' >>) => {
    await updateExistingItem(Number(id), updatedItem);
    navigate('/');
  };

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Item</h1>
      <ItemForm item={item} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditItem;
