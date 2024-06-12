import "../../styles/elements.css";

const FollowUserElement = () => {
  return (
    <div className="follow-user-element-container">
      <div className="follow-user-top-section">
        <div className="follow-user-info">
          <img
            src="test-profile-picture.jpg"
            alt=""
            className="small-profile-picture"
          />
          <div className="follow-user-names">
            <span className="users-name">Harun</span>
            <span className="users-at">@harun2903</span>
          </div>
        </div>

        <button className="follow-button">Follow</button>
      </div>

      <p className="follow-user-bottom-section">
        This is my random shor description
      </p>
    </div>
  );
};

export default FollowUserElement;
