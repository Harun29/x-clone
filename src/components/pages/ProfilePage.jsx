import { useEffect, useState } from "react";
import { usePosts } from "../../context/PostsContext";
import Navbar from "../page_elements/Navbar";
import ProfileDetail from "../page_elements/ProfileDetails";
import PostElement from "../small_elements/PostElement";
import SearchElement from "../small_elements/SearchElement";
import WhoToFollowElement from "../small_elements/WhoToFollowElement";
import { useAuth } from "../../context/AuthContext";

const ProfilePage = () => {

  const {getPostsByUser} = usePosts();
  const {currentUser} = useAuth();
  const [posts, setPost] = useState([]);
  // const [username, setUsername] = useState()
  
  useEffect(() => {
    const festchPosts = async(username) => {
      const response = await getPostsByUser(username);
      setPost(response)
    }
    try{
      if(currentUser){
        festchPosts(currentUser.username)
      }
    }catch(err){
      console.error(err)
    }
  }, [currentUser, getPostsByUser])

  useEffect(() => {
    console.log(posts)
  }, [posts])

  return (
    <div className="home-page">
        <div className="left-section">
          <Navbar />
        </div>
        <div className="middle-section">
          <ProfileDetail userType="current-user"/>
          {posts
          ? posts.map((post) => (
              <PostElement
                content={post.postContent}
                name={post.userPostedNavigation.name}
                username={post.userPostedNavigation.username}
                noComments={post.noComments}
                noReposts={post.noReposts}
                noLikes={post.noLikes}
                type="profile"
                postId={post.postId}
              />
            ))
          : null}
        </div>
        <div className="right-section">
          <SearchElement />
          <WhoToFollowElement />
        </div>
    </div>
  );
};

export default ProfilePage;
