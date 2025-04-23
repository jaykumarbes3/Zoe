import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stores user data, including role
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock authentication or fetch user from token/session
    const fetchUser = async () => {
      const storedUser = JSON.parse(localStorage.getItem("user")) || null;
      setUser(storedUser);
      setIsLoading(false);
    };

    fetchUser();
  }, []);

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;