import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
export default function AppContextProvider({ children }) {
    const [state, setState] = useState({
        isAuth: false,
        token: null
      });
    const login=(token)=>{
        setState({
            ...state,
            isAuth: true,
            token: token
          });

    }
    const logout=()=>{
        setState({
            ...state,
            isAuth: false,
            token: null
          });

    }
   
  
    return (
      <AuthContext.Provider value={{state,login,logout}}>
        {children}
      </AuthContext.Provider>
    );
  }