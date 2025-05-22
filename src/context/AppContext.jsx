import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userType, setUserType] = useState(null); // 'user' or 'admin'
  const [data, setData] = useState([]); // shared user/admin data

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const login = (type) => setUserType(type);
  const logout = () => setUserType(null);

  return (
    <AppContext.Provider value={{ isDarkMode, toggleTheme, userType, login, logout, data, setData }}>
      {children}
    </AppContext.Provider>
  );
};
