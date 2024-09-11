import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { InventoryItem } from "../../types/inventoryItem";

const API_URL = 'http://localhost:3000/inventory';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get<InventoryItem[]>(`${API_URL}?name=${searchTerm}`);
      navigate(`/search-results`, { state: { items: response.data } });
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  return (
    <form className="flex items-center max-w-sm mx-auto" onSubmit={handleSearch}>
      <label htmlFor="simple-search" className="sr-only">Search</label>
      <div className="relative w-full">
        <input
          type="text"
          id="simple-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Search item name"
          required
        />
      </div>
      <button
        type="submit"
        className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};
