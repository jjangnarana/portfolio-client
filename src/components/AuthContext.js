import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ssid, setSsid] = useState('');
  const [userData, setUserData] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const setUser = (data) => {
    setUserData(data);
    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userData,
        setUserData,
        setUser,
        refreshKey,
        setRefreshKey,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
