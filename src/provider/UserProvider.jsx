import { UserContext } from "../context/UserContext";
import { useState } from "react";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "", photoUrl: "" });

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
