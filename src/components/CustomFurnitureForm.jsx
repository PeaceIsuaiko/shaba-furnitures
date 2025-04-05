import React, { useState } from 'react';

function CustomFurnitureForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, price });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md p-4 rounded mb-4"
    >
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="py-2 px-4 border border-gray-400 rounded"
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="py-2 px-4 border border-gray-400 rounded"
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="py-2 px-4 border border-gray-400 rounded"
        />
      </label>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default CustomFurnitureForm;