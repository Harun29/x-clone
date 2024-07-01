import Navbar from "../page_elements/Navbar";
import ProfileDetail from "../page_elements/ProfileDetails";
import CommentedPostElement from "../small_elements/CommentedPostElement";
import PostElement from "../small_elements/PostElement";
import SearchElement from "../small_elements/SearchElement";
import WhoToFollowElement from "../small_elements/WhoToFollowElement";

const ProfilePage = () => {
  return (
    <div className="home-page">
        <div className="left-section">
          <Navbar />
        </div>
        <div className="middle-section">
          <ProfileDetail />
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

export default ProfilePage;
