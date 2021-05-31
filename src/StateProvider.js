import React, { createContext, useReducer, useContext } from "react";

export const StateContext = createContext();

// Do NOT put {} instead of ();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
