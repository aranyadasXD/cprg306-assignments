"use client";

import React, { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    if (quantity < 20) {
      setQuantity(prev => prev + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);

    alert(`Item: ${name}, Quantity: ${quantity}, Category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center bg-black p-4 space-y-4 w-full max-w-md mx-auto rounded-lg">
    {/* Name Field */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Item name"
        className="w-full p-2 bg-zinc-900 text-white text-sm border border-gray-700 rounded-md placeholder-gray-500 focus:outline-none"
      />

      <div className="flex justify-between w-full">

        <div className="flex items-center space-x-2 bg-zinc-900 p-2 rounded-md">
          <input
            type="text"
            value={quantity}
            readOnly
            className="w-8 text-center text-white text-lg bg-transparent border-none focus:outline-none"
          />
          <button
            type="button"
            onClick={decrement}
            className={`w-8 h-8 text-white rounded-md flex items-center justify-center ${
              quantity > 1 ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-700'
            }`}
          >
            -
          </button>
          <button
            type="button"
            onClick={increment}
            className={`w-8 h-8 text-white rounded-md flex items-center justify-center ${
              quantity < 20 ? 'bg-blue-600 hover:bg-blue-500' : 'bg-gray-700'
            }`}
          >
            +
          </button>
        </div>

      {/* Category Field */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-40 p-2 bg-zinc-900 text-white border border-gray-700 rounded-md"
        >
          <option value="Produce">Produce</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>

    {/* Submit Button */}
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md text-xl flex justify-center">
        +
      </button>
    </form>
  );
}
