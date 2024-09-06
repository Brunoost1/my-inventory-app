import axios from 'axios';
import { InventoryItem } from '../types/inventoryItem';

const API_URL = 'http://localhost:3000/inventory';

export const getItems = async (): Promise<InventoryItem[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createItem = async (item: Omit<InventoryItem, 'id' | 'addedAt'>): Promise<InventoryItem> => {
  const response = await axios.post(API_URL, item);
  return response.data;
};

export const updateItem = async (id: number, item: Partial<Omit<InventoryItem, 'id' | 'addedAt'>>): Promise<InventoryItem> => {
  const response = await axios.put(`${API_URL}/${id}`, item);
  return response.data;
};

export const deleteItem = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
