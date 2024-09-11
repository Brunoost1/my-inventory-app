import { useState } from 'react';
import { updateItem } from '../api/inventoryApi';
import { InventoryItem } from '../types/inventoryItem';

export const useUpdateItem = () => {
  const [loading, setLoading] = useState(false);

  const updateExistingItem = async (id: number, item: Partial<Omit<InventoryItem, 'id' >>): Promise<InventoryItem> => {
    setLoading(true);
    const updatedItem = await updateItem(id, item);
    setLoading(false);
    return updatedItem;
  };

  return { updateExistingItem, loading };
};
