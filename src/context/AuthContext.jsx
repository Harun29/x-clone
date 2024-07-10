import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }){

  const [currentUser, setCurrentUser] = useState();
  const [likedPosts, setLikedPosts] = useState([]);

  const getUserByUsername = async (username) => {
    const response = await fetch(`https://localhost:7104/api/User/GetUser/${username}`)
    if(!response.ok){
      throw new Error(`Failed to get user with username ${username}`)
    }
    return await response.json();
  }

  const getUsersLikedPosts = async (userId) => {
    const response = await fetch(`https://localhost:7104/api/User/GetLikedPosts?userId=${userId}`,{
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!response.ok) {
      throw new Error('Failed to fetch posts from following users');
    }
    const liked = await response.json();
    const likedPostIds = liked.map(like => like.postLiked);
    setLikedPosts(likedPostIds);
  }

  useEffect(() => {
    const fetchUser = async() => {
      const response = await(getUserByUsername("harun31"))
      await(getUsersLikedPosts("2"))
      setCurrentUser(response)
    }
    fetchUser();
  }, [])

  const value = {
    currentUser,
    getUserByUsername,
    likedPosts
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  ); 
}

export default AuthContext;