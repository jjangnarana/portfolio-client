import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const setUser = (data) => {
    setUserData(data);
    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, userData, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
