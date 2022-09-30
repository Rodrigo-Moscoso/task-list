import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("El useUser deber ser usado dentro de un en UserProvider");
  }
  return context;
};
