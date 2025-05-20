import React, { useState, useEffect } from "react";
import Toggle from "../components/Toggle";
import { Link } from "react-router-dom";





const Prof = () => {
  // Initial user state (could be from localStorage if there's data saved)
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : {
      name: '',
      email: '',
      location: '',
      phone: '',
      profilePicture: '',
    };
  });

  const [isEditing, setIsEditing] = useState(false); // Toggle editing mode
  const [editedUser, setEditedUser] = useState({ ...user }); // User data for editing
  const [imagePreview, setImagePreview] = useState(null); // For previewing the image
  const [error, setError] = useState('');

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  // Handle profile picture changes
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedUser({
          ...editedUser,
          profilePicture: reader.result, // Save as base64 string
        });
        setImagePreview(reader.result); // Set image preview
      };
      reader.readAsDataURL(file); // Convert image to base64
    } else {
      setError("Please upload a valid image.");
    }
  };

  // Save the edited profile data
  const handleSaveClick = () => {
    // Basic validation
    if (!editedUser.email || !editedUser.phone) {
      setError("Email and phone number are required.");
      return;
    }

    const phoneRegex = /^[0-9]{11}$/; // Simple phone number validation
    if (!phoneRegex.test(editedUser.phone)) {
      setError("Phone number must be 10 digits.");
      return;
    }

    // Clear any previous errors and save the user data
    setError('');
    setUser(editedUser);
    setIsEditing(false);

    // Save to localStorage
    localStorage.setItem('user', JSON.stringify(editedUser));
  };

  // Cancel editing
  const handleCancelClick = () => {
    setEditedUser(user); // Revert to original data if canceled
    setIsEditing(false);
    setError('');
  };

  // Handle edit button click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
      <Toggle>
        <div className="bg-yellow-400 px-12 py-14">
          {isEditing ? (
            <div>
              <h2 className="text-xl mb-4">Edit Profile</h2>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <div className="mb-4">
                <label className="block text-lg">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={editedUser.name}
                  onChange={handleChange}
                  className="border px-3 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={editedUser.email}
                  onChange={handleChange}
                  className="border px-3 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={editedUser.phone}
                  onChange={handleChange}
                  className="border px-3 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg">Location:</label>
                <input
                  type="text"
                  name="location"
                  value={editedUser.location}
                  onChange={handleChange}
                  className="border px-3 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg">Profile Picture:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="border px-3 py-2 w-full"
                />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Profile Preview"
                    className="mt-4 w-32 h-32 object-cover rounded-full"
                  />
                )}
              </div>
              <div className="space-x-4">
                <button
                  onClick={handleSaveClick}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelClick}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-xl mb-4">Profile</h2>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Location:</strong> {user.location}</p>
              {user.profilePicture && (
                <img
                  src={user.profilePicture}
                  alt="Profile"
                  className="w-32 h-32 object-cover rounded-full mt-4"
                />
              )}
              <button
                onClick={handleEditClick}
                className="bg-yellow-500 text-black px-4 py-2 mt-4 rounded"
              >
                Edit Profile
              </button>
            </div>
          )}
          <Link to="/auths" className="block px-4 py-2 md:px-0 md:py-0 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">SignUP</Link>
        </div>
      </Toggle>

      
  );
};

export default Prof;
