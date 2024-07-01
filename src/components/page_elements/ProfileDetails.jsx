const ProfileDetail = () => {
  return (
    <div className="profile-detail">
      <div className="pd-cover-and-profile">
        <img src="test-cover-picture.jpg" alt="" className="pd-cover-picture" />
        <div className="pd-profile-picture">
          <img
            src="test-profile-picture.jpg"
            alt=""
            className="medium-profile-picture"
          />
        </div>
      </div>
      <div className="pd-interactions">
        <button className="follow-button">Follow</button>
      </div>
      <div className="pd-information">
        <span className="users-name">Harun</span>
        <span className="users-at">@Harun29</span>
      </div>
      <div className="pd-bio">
        <p className="users-bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          semper, justo sed ultricies venenatis, mi odio lacinia purus, in
          vestibulum leo metus eu massa.
        </p>
      </div>
      <div className="pd-stats">
        <p>
          1,999 <span className="note">following</span>
        </p>
        <p>
          29.9M <span className="note">followers</span>
        </p>
      </div>
      <div className="pd-navigation">
        <div className="interaction-container active">
          <span>Posts</span>
          <div className="bottom-line"></div>
        </div>
        <div className="interaction-container">
          <span>Replies</span>
          <div className="bottom-line"></div>
        </div>
        <div className="interaction-container">
          <span>Reposts</span>
          <div className="bottom-line"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
