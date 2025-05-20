import React, { useState } from 'react';
import Toggle from "../components/Toggle";
import Button from '../components/Button';

function Add() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const newProduct = { ...product, id: Date.now() };
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    alert('Product added successfully!');
    setProduct({ name: '', price: '', image: '', description: '' });
  };

  return (
    <Toggle>
      <div className='flex flex-col px-14 py-12'>
        <h3>Add New Product</h3>
        <form onSubmit={handleSubmit} className="space-y-4 py-10">
          <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" required />
          <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
          <input type="text" name="image" value={product.image} onChange={handleChange} placeholder="Image URL" />
          <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description"></textarea>
          <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Product</Button>
        </form>
      </div>
    </Toggle>
  );
}

export default Add;
