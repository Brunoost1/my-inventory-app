import { useCreateItem } from '../../hooks/useCreateItem';
import { useNavigate } from 'react-router-dom';
import ItemForm from '../../components/ItemForm/ItemForm';
import { InventoryItem } from '../../types/inventoryItem';
const CreateItem = () => {
  const { createNewItem } = useCreateItem();
  const navigate = useNavigate();

  const handleSubmit = async (item: Omit<InventoryItem, 'id' | 'addedAt'>) => {
    await createNewItem(item);
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Item</h1>
      <ItemForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateItem;
