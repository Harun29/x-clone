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
  const { getPostsByFollowing } = usePosts();
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchPosts = async (username) => {
      const response = await getPostsByFollowing(username);
      setPosts(response);
    };
    if (currentUser) {
      fetchPosts(currentUser.username);
    }
  }, [currentUser, getPostsByFollowing]);

  return (
    <div className="home-page">
      <div className="left-section">
        <Navbar />
      </div>
      <div className="middle-section">
        <NewPostElment />
        {/* <CommentedPostElement /> */}
        {posts
          ? posts.map((post) => (
              <PostElement
                content={post.postContent}
                name={post.userPostedNavigation.name}
                username={post.userPostedNavigation.username}
                noComments={post.noComments}
                noReposts={post.noReposts}
                noLikes={post.noLikes}
                profilePicture={post.userPostedNavigation.profilePicture}
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

export default HomePage;
