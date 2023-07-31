import { Box } from "@mui/material";
import React, { createContext, useContext, useState } from "react";
//create context
const UserDataContext = createContext();
//create provider
export default function UserDataProvider({ children }) {
  const [showBox, setShowBox] = useState(true);
  const toggleShow = () => {
    setShowBox((prev) => !prev);
  };
  return (
    <>
      {showBox && (
        <Box sx={{ backgroundColor: "red", width: 50, height: 50 }}></Box>
      )}
      <UserDataContext.Provider value={toggleShow}>
        {children}
      </UserDataContext.Provider>
    </>
  );
} //create hook to use the context and handle error
export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (!context)
    throw new Error("useUserData must be used within a NameProvider");
  return context;
};
