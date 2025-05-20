import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Toggle from "../components/Toggle";
import Button from '../components/Button';

function Edit() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: '',
    description: ''
  });

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const found = products.find(p => p.id === Number(id));
    if (found) setProduct(found);
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products = products.map(p => (p.id === Number(id) ? { ...product, id: Number(id) } : p));
    localStorage.setItem('products', JSON.stringify(products));
    alert('Product updated successfully!');
  };

  return (
    <Toggle>
      <div className='flex flex-col px-10 py-7'>
        <h3>Edit Product</h3>
        <form onSubmit={handleSubmit} className="space-y-4 py-5">
          <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" className='hover:border hover:border-yellow-200 p-2' required />
          <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" className='hover:border hover:border-yellow-200 p-2' required />
          <input type="text" name="image" value={product.image} onChange={handleChange} placeholder="Image URL" className='hover:border hover:border-yellow-200 p-2' />
          <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" className='hover:border hover:border-yellow-200 p-2'></textarea>
          <Button type="submit" className="px-4 py-2 ">Update Product</Button>
        </form>
      </div>
    </Toggle>
  );
}

export default Edit;
