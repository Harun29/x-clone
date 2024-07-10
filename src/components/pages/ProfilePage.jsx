import { useEffect, useState } from "react";
import { usePosts } from "../../context/PostsContext";
import Navbar from "../page_elements/Navbar";
import ProfileDetail from "../page_elements/ProfileDetails";
import PostElement from "../small_elements/PostElement";
import SearchElement from "../small_elements/SearchElement";
import WhoToFollowElement from "../small_elements/WhoToFollowElement";
import { useAuth } from "../../context/AuthContext";
import { useParams } from "react-router-dom";

const ProfilePage = () => {

  const {getPostsByUser} = usePosts();
  const {currentUser} = useAuth();
  const [posts, setPost] = useState([]);
  const {username} = useParams();

  useEffect(() => {
    const fetchPosts = async(username) => {
      const response = await getPostsByUser(username);
      setPost(response)
    }
    try{
      if(!username){
        fetchPosts(currentUser.username)
      }else{
        fetchPosts(username)
      }
    }catch(err){
      console.error(err)
    }
  }, [currentUser, getPostsByUser, username])

  useEffect(() => {
    console.log(posts)
  }, [posts])

  return (
    <div className="home-page">
        <div className="left-section">
          <Navbar />
        </div>
        <div className="middle-section">
          <ProfileDetail username={username ? username : ""}/>
          {posts
          ? posts.map((post) => (
              <PostElement
                content={post.postContent}
                name={post.userPostedNavigation.name}
                username={post.userPostedNavigation.username}
                noComments={post.noComments}
                noReposts={post.noReposts}
                noLikes={post.noLikes}
                type={username ? "public" : "profile"}
                postId={post.postId}
                reposted={post.userPostedNavigation.username !== currentUser.username && true}
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
