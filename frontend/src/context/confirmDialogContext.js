import React, { useState, createContext } from "react";
export const ConfirmDialogContext = createContext();
export const ConfirmDialogProvider = (props) => {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const value = {
    confirmOpen,
    setConfirmOpen,
  };
  return (
    <ConfirmDialogContext.Provider value={value}>
      {props.children}
    </ConfirmDialogContext.Provider>
  );
};
