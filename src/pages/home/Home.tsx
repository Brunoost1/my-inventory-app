import React from 'react';
import { useFetchItems } from '../../hooks/useFetchItems';
import ItemList from '../../components/ItemList/ItemList';

const Home = () => {
  const { items, loading, fetchItems } = useFetchItems(); 

  const handleDelete = (id: number) => {
   
    fetchItems();
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>
      <ItemList items={items} onDelete={handleDelete} />
    </div>
  );
};

export default Home;
