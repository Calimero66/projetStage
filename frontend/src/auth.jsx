import React, { createContext, useState, useContext } from 'react';

// Create a context for the auth state
const AuthContext = createContext();

// Create a provider component
export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')),
  });

  const setAuthState = (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    setAuth({ token, user });
  };

  return (
    <AuthContext.Provider value={{ auth, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}

// Create a hook that uses the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}