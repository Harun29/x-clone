import { createContext, useContext } from "react";

const PostsContext = createContext();

export function usePosts() {
  return useContext(PostsContext);
}

export function PostsProvider({ children }){

  const getPostById = async (postId) => {
    const response = await fetch(`https://localhost:7104/api/Post/post/${postId}`)
    if(!response.ok){
      throw new Error('Failed to fetch post');
    }
    return await response.json();
  }
  
  const getPostsByUser = async (username) => {
    const response = await fetch(`https://localhost:7104/api/Post/posts-by-user?username=${username}`)
    if(!response.ok){
      throw new Error(`Failed to fetch posts by user ${username}`);
    }
    return await response.json();
  }

  const getPostsByFollowing = async (username) => {
    const response = await fetch(`https://localhost:7104/api/Post/followingPosts/${username}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch posts from following users');
    }
    return await response.json();
  };

  const createPost = async (userId, content) => {
    const response = await fetch(`https://localhost:7104/api/Post/create/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(content),
    });
    if (!response.ok) {
        throw new Error('Failed to create post');
    }
    return await response.text("created post");
  };

  const deletePost = async (postID) => {
    const response = await fetch(`https://localhost:7104/api/Post/deletePost/${postID}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete post');
    }
    return await response.text();
  };

  const updatePost = async (postID, userID, newContent) => {
    const response = await fetch(`https://localhost:7104/api/Post/update/${postID}?usersId=${userID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContent),
    });
    if (!response.ok) {
        throw new Error('Failed to update post');
    }
    return await response.text();
  };

  const repost = async (postId, userId) => {
    const response = await fetch(`https://localhost:7104/api/Repost/AddRepost?postReposted=${postId}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userId)
    });
    
    if (!response.ok) {
      throw new Error("failed reposting");
    }
    
    return await response.text("reposted");
  };
  const like = async (postId, userId) => {
    const response = await fetch(`https://localhost:7104/api/Like?postId=${postId}&userId=${userId}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    if (!response.ok) {
      throw new Error("failed likeing");
    }
    
    return await response.text("liked");
  };

  const dislike = async (userId, postId) => {
    const response = await fetch(`https://localhost:7104/api/Like?userId=${userId}&postId=${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    if(!response.ok){
      throw new Error("failed dislikeing");
    }

    return await response.text("deleted like")
  }

  const value = {
    getPostById,
    getPostsByUser,
    getPostsByFollowing,
    createPost,
    deletePost,
    updatePost,
    repost,
    like,
    dislike
  }

  return (
    <PostsContext.Provider value={value}>
      {children}
    </PostsContext.Provider>
  );
}

export default PostsContext;