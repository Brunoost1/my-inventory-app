import axios from 'axios';
import { InventoryItem } from '../types/inventoryItem';

const API_URL = 'http://localhost:3000/inventory';
// - IP do meu servidor PARA COLOCAR NO LUGAR DO LOCALHOST PARA CONECTAR COM MINHA API E REDENRIZAR NO MEU CELULAR RECEBA!!!! ALERTA PARA CAÇAR UM JEITO DE INCLUIR O IP DO SERVIDOR NO LUGAR DO LOCALHOST SENDO DINAMICO E NÃO ESTATICO!!!!!!!!!!!!!!!!!!!


export const getItems = async (): Promise<InventoryItem[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createItem = async (item: Omit<InventoryItem, 'id'>): Promise<InventoryItem> => {
  const response = await axios.post(API_URL, item);
  return response.data;
};

export const updateItem = async (id: number, item: Partial<Omit<InventoryItem, 'id'>>): Promise<InventoryItem> => {
  const response = await axios.put(`${API_URL}/${id}`, item);
  return response.data;
};

export const deleteItem = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
