import Navbar from "../page_elements/Navbar";
import CommentedPostElement from "../small_elements/CommentedPostElement";
import NewPostElment from "../small_elements/NewPostElement";
import PostElement from "../small_elements/PostElement";
import SearchElement from "../small_elements/SearchElement";
import WhoToFollowElement from "../small_elements/WhoToFollowElement";

const HomePage = () => {
  return (
    <div className="home-page">
        <div className="home-page-navbar-section">
          <Navbar />
        </div>
        <div className="home-page-posts-section">
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
        <div className="home-page-right-section">
          <SearchElement />
          <WhoToFollowElement />
        </div>
    </div>
  );
};

export default HomePage;
