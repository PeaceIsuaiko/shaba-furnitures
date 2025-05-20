import React, { useState, useEffect } from 'react';
import Toggle from "../components/Toggle";

function AdminAnalytics() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [totalProductsSold, setTotalProductsSold] = useState(0);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const sales = JSON.parse(localStorage.getItem('sales')) || [];

    setTotalUsers(users.length);
    setTotalSales(sales.reduce((acc, sale) => acc + sale.amount, 0));
    setTotalProductsSold(sales.reduce((acc, sale) => acc + sale.quantity, 0));
  }, []);

  return (
    <Toggle>
      <div className="w-full py-10 mt-10 px-4 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Admin Analytics Overview</h2>

        <div className="bg-yellow-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded shadow-sm">
          <h4 className="text-lg font-medium">Total Users</h4>
          <p className="text-2xl font-bold">{totalUsers}</p>
        </div>

        <div className="bg-yellow-300 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-sm">
          <h4 className="text-lg font-medium">Total Sales</h4>
          <p className="text-2xl font-bold">${totalSales.toLocaleString()}</p>
        </div>

        <div className="bg-yellow-500 border-l-4 border-purple-500 text-purple-700 p-4 rounded shadow-sm">
          <h4 className="text-lg font-medium">Products Sold</h4>
          <p className="text-2xl font-bold">{totalProductsSold}</p>
        </div>
      </div>
    </Toggle>
  );
}

export default AdminAnalytics;
