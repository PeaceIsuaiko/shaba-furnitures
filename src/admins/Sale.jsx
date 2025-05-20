import React, { useState, useEffect } from 'react';
import Toggle from "../components/Toggle";
import products from '../api/products.json'; // Import your product list

function Sale() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const storedSales = JSON.parse(localStorage.getItem('sales')) || [];

    // If no sales exist, create demo sales from products
    if (storedSales.length === 0) {
      const demoSales = products.map(product => ({
        productName: product.productName,
        amount: product.price,
        quantity: 1,
        date: new Date().toISOString(),
      }));
      localStorage.setItem('sales', JSON.stringify(demoSales));
      setSales(demoSales);
    } else {
      setSales(storedSales);
    }
  }, []);

  const calculateTotal = (period) => {
    const now = new Date();
    return sales
      .filter(sale => {
        const saleDate = new Date(sale.date);
        switch (period) {
          case 'day':
            return saleDate.toDateString() === now.toDateString();
          case 'week':
            const weekAgo = new Date();
            weekAgo.setDate(now.getDate() - 7);
            return saleDate >= weekAgo && saleDate <= now;
          case 'month':
            return saleDate.getMonth() === now.getMonth() &&
                   saleDate.getFullYear() === now.getFullYear();
          case 'year':
            return saleDate.getFullYear() === now.getFullYear();
          default:
            return false;
        }
      })
      .reduce((acc, sale) => acc + sale.amount, 0);
  };

  const groupByProduct = () => {
    const productTotals = {};
    sales.forEach(sale => {
      if (!productTotals[sale.productName]) {
        productTotals[sale.productName] = 0;
      }
      productTotals[sale.productName] += sale.amount;
    });
    return productTotals;
  };

  const productTotals = groupByProduct();

  return (
    <Toggle>
      <div className='w-full py-10 px-6 space-y-6'>
        <h3 className="text-xl font-bold mb-4">Sales History</h3>


        <div className="bg-blue-100 border-l-4 border-yellow-500 text-black-700 p-4 rounded shadow-sm">
          <div className="p-4 bg-gray-100 rounded shadow">
            <h4 className="font-semibold">Today</h4>
            <p>${calculateTotal('day')}</p>
          </div>
          <div className="p-4 bg-yellow-100 rounded shadow">
            <h4 className="font-semibold">This Week</h4>
            <p>${calculateTotal('week')}</p>
          </div>
          <div className="p-4 bg-gray-200 rounded shadow">
            <h4 className="font-semibold">This Month</h4>
            <p>${calculateTotal('month')}</p>
          </div>
          <div className="p-4 bg-gray-300 rounded shadow">
            <h4 className="font-semibold">This Year</h4>
            <p>${calculateTotal('year')}</p>
          </div>
        </div>

        <h4 className="text-lg font-semibold mb-2">Sales by Product</h4>
        <div className="bg-blue-100 border-l-4 border-yellow-500 text-black-700 p-4 rounded shadow-sm">
          {Object.entries(productTotals).map(([product, total]) => (
            <div key={product} className="p-4 bg-yellow-100 rounded shadow">
              <h5 className="font-medium">{product}</h5>
              <p>${total}</p>
            </div>
          ))}
        </div>
      </div>
    </Toggle>
  );
}

export default Sale;
