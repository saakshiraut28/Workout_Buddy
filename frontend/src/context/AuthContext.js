/** @format */

import { createContext, useReducer } from "react";

// Initialize the Context
export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    // Login and Logout are actions whereas we return states
    case "LOGIN":
      return { user: action.payload };

    case "LOGOUT":
      return { user: null };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state }}>
      {/* We use {{ ...state }} the first one indicates that it is dynamic and the inner curly braces indicates that it is object */}
      {children}
    </AuthContext.Provider>
  );
};
