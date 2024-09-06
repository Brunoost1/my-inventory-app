import { useState } from 'react';
import { createItem } from '../api/inventoryApi';
import { InventoryItem } from '../types/inventoryItem';

export const useCreateItem = () => {
  const [loading, setLoading] = useState(false);

  const createNewItem = async (item: Omit<InventoryItem, 'id' | 'addedAt'>): Promise<InventoryItem> => {
    setLoading(true);
    const newItem = await createItem(item);
    setLoading(false);
    return newItem;
  };

  return { createNewItem, loading };
};
