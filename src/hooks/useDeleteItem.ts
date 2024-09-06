import { useState } from 'react';
import { deleteItem } from '../api/inventoryApi';

export const useDeleteItem = () => {
  const [loading, setLoading] = useState(false);

  const removeItem = async (id: number): Promise<void> => {
    setLoading(true);
    try {
      await deleteItem(id);
    } catch (error) {
      console.error('Failed to delete item:', error);
    } finally {
      setLoading(false);
    }
  };

  return { removeItem, loading };
};
