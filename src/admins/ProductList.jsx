import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Toggle from "../components/Toggle";

function List() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const handleDelete = (id) => {
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
    localStorage.setItem('products', JSON.stringify(updated));
  };

  return (
    <Toggle>
      <div className='flex flex-col py-7'>
        <h3>Product List</h3>
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2">Price</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody >
              {products.map(product => (
                <tr key={product.id} className='border border-yellow-200 space-y-4'>
                  <td className="py-2 text-2">{product.name}</td>
                  <td className="py-2">${product.price}</td>
                  <td className="py-2  justify-end right-0  ">
                    <Link to={`/admins/Edit/${product.id}`} className="bg-yellow-500 text-white px-5 justify-end right-0 py-1 rounded">Edit</Link>
                    <button onClick={() => handleDelete(product.id)} className="bg-yellow-300 text-white px-5 py-1 mt-4 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Toggle>
  );
}

export default List;
