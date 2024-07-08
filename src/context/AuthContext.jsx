import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }){

  const [currentUser, setCurrentUser] = useState();

  const getUserByUsername = async (username) => {
    const response = await fetch(`https://localhost:7104/api/User/GetUser/${username}`)
    if(!response.ok){
      throw new Error(`Failed to get user with username ${username}`)
    }
    return await response.json();
  }

  useEffect(() => {
    const fetchUser = async() => {
      const response = await(getUserByUsername("harun31"))
      setCurrentUser(response)
    }
    fetchUser();
  }, [])

  const value = {
    currentUser,
    getUserByUsername
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  ); 
}

export default AuthContext;