import { createContext } from "react";

const userContextDefaultValue = {
  user: { name: "", photoUrl: "" },
  setUser: () => {},
};

export const UserContext = createContext(userContextDefaultValue);
