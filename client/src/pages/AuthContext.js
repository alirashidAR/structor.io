import React, { createContext, useState } from 'react';

// Create a context for managing authentication state
export const AuthContext = createContext();

// Create a provider component to wrap your application and provide the context value
export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null); // Initialize userId state with null

  // Function to set the userId when a user logs in
  const login = (userId) => {
    setUserId(userId);
  };

  // Function to clear the userId when a user logs out
  const logout = () => {
    setUserId(null);
  };

  // Value object to be provided by the context
  const value = {
    userId,
    login,
    logout
  };

  // Provide the context value to the children components
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
