const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-top-section">
        <img src="xlogo.png" alt="" />
        <div className="navabr-element">
          <span>Home</span>
        </div>
        <div className="navabr-element">
          <span>Explore</span>
        </div>
        <div className="navabr-element">
          <span>Bookmarks</span>
        </div>
        <div className="navabr-element">
          <span>Profile</span>
        </div>
        <div className="navabr-element">
          <span>Settings</span>
        </div>
        <button className="navbar-post-button">Post</button>
      </div>
      <div className="navbar-bottom-section">
        <div className="small-profile-picture">
          <img src="test-profile-picture" alt="" />
        </div>
        <div className="navbar-users-names">
          <span className="users-name">Harun</span>
          <span className="users-at"></span>
        </div>
      </div>
    </div>
    );
}
 
export default Navbar;