import React from 'react';
import { InventoryItem } from '../../types/inventoryItem';
import ItemCard from '../ItemCard/ItemCard';


interface ItemListProps {
  items: InventoryItem[];
  onDelete: (id: number) => void; 
}

const ItemList: React.FC<ItemListProps> = ({ items, onDelete }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {items.map(item => (
        <ItemCard key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ItemList;
