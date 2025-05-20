import React, { useState, useEffect } from 'react';
import Toggle from "../components/Toggle";
import Button from '../components/Button';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleView = (user) => {
    alert(`Name: ${user.name}\nEmail: ${user.email}`);
  };

  const handleDelete = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  return (
    <Toggle>
      <div className="flex flex-col px-14 py-7">
        <h3 className="text-2xl font-bold mb-4">User Profiles</h3>
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id || index} className="border-t">
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">
                    <Button
                      
                      onClick={() => handleView(user)}
                    >
                      View
                    </Button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
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

export default Users;
