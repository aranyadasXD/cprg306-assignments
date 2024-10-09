"use client";

import React, { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

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

  return (
    <div className="flex flex-col items-center bg-black">
      <div className="flex items-center space-x-2 bg-zinc-900 p-4 shadow-md">
        <input
          type="text"
          value={quantity}
          readOnly
          className="w-10 text-center text-white text-xl bg-transparent border-none focus:outline-none"
        />
        <button
          onClick={decrement}
          className={`w-8 h-6 text-white rounded-lg flex items-center justify-center ${
            quantity > 1 ? 'bg-blue-600 hover:bg-blue-500' : 'bg-gray-700'
          }`}
        >
          -
        </button>
        <button
          onClick={increment}
          className={`w-8 h-6 text-white rounded-lg flex items-center justify-center ${
            quantity < 20 ? 'bg-blue-600 hover:bg-blue-500' : 'bg-gray-700'
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
}
