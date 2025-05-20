import React from 'react';
import ThemeToggle from './components/ThemeToggle';
import UserSettings from './user/UserSettings';
import AdminSettings from './admin/AdminSettings';
import { useUser } from './context/UserContext';  // Assuming useUser is a custom hook to get user role

function Set() {
  const { role } = useUser();

  return (
    <div>
      <h2>General Settings</h2>
      {/* Common settings for all users */}
      <ThemeToggle />

      {role === 'admin' && (
        <>
          <h3>Admin Settings</h3>
          <AdminSettings />
        </>
      )}

      {role === 'user' && (
        <>
          <h3>User Settings</h3>
          <UserSettings />
        </>
      )}
    </div>
  );
}

export default Set;
