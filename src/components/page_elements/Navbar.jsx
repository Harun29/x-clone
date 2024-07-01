import "../../styles/pages.css";
import HomeIcon from "../../icons/HomeIcon";
import SearchIcon from "../../icons/SearchIcon";
import BookmarkIcon from "../../icons/BookmarkIcon";
import ProfileIcon from "../../icons/ProfileIcon";
import SettingsIcon from "../../icons/SettingsIcon";
import DotsIcon from "../../icons/DotsIcon";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-top-section">
        <div className="navbar-element">
          <img src="xlogo.png" alt="" />
        </div>
          <Link to={"/"}>
        <div className="navbar-element">
          <HomeIcon />
            <span>Home</span>
        </div>
          </Link>
        <div className="navbar-element">
          <SearchIcon />
          <span>Explore</span>
        </div>
        <div className="navbar-element">
          <BookmarkIcon />
          <span>Bookmarks</span>
        </div>
          <Link to={"/profile"}>
        <div className="navbar-element">
          <ProfileIcon />
            <span>Profile</span>
        </div>
          </Link>
        <div className="navbar-element">
          <SettingsIcon />
          <span>Settings</span>
        </div>
        <button className="navbar-post-button">Post</button>
      </div>
      <div className="navbar-bottom-section">
        <div className="navbar-bottom-section-user-info">
          <img
            src="test-profile-picture.jpg"
            alt=""
            className="small-profile-picture"
          />
          <div className="navbar-users-names">
            <span className="users-name">Harun</span>
            <span className="users-at">@Harun2903</span>
          </div>
        </div>
        <DotsIcon />
      </div>
    </div>
  );
};

export default Navbar;
