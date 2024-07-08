import { useEffect, useState } from "react";
import Navbar from "../page_elements/Navbar";
import CommentedPostElement from "../small_elements/CommentedPostElement";
import NewPostElment from "../small_elements/NewPostElement";
import PostElement from "../small_elements/PostElement";
import SearchElement from "../small_elements/SearchElement";
import WhoToFollowElement from "../small_elements/WhoToFollowElement";
import { usePosts } from "../../context/PostsContext";
import { useAuth } from "../../context/AuthContext";

const HomePage = () => {

  const [posts, setPosts] = useState();
  const {getPostsByFollowing} = usePosts();
  const {currentUser} = useAuth();

  useEffect(() => {
    console.log(currentUser)
  }, [currentUser])
  

  return (
    <div className="home-page">
        <div className="left-section">
          <Navbar />
        </div>
        <div className="middle-section">
          <NewPostElment />
          <CommentedPostElement />
          <PostElement />
          <PostElement />
          <PostElement />
          <PostElement />
          <PostElement />
          <PostElement />
          <PostElement />
          <PostElement />
          <PostElement />
          <PostElement />
          <PostElement />
          <PostElement />
          <PostElement />
          <PostElement />
          <PostElement />
          <PostElement />
        </div>
        <div className="right-section">
          <SearchElement />
          <WhoToFollowElement />
        </div>
    </div>
  );
};

export default HomePage;
