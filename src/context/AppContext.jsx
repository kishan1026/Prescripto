import { createContext, useState, useEffect } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const currencySymbol = '$';

  // 🔥 AUTH STATE
  const [token, setToken] = useState(localStorage.getItem("isLoggedIn"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser(storedUser);
  }, []);

  // LOGIN FUNCTION
  const login = (userData) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(userData));
    setToken("true");
    setUser(userData);
  };

  // LOGOUT FUNCTION
  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    setToken(null);
    setUser(null);
  };

  const value = {
    doctors,
    currencySymbol,
    token,
    user,
    login,
    logout
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;