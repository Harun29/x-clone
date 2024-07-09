import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

const ProfileDetail = ({userType}) => {

  const {currentUser} = useAuth();


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
        <button className="follow-button">{(userType === "current-user") ? "Edit profile" : "Follow"}</button>
      </div>
      <div className="pd-information">
        <span className="users-name">{currentUser ? currentUser.name : ""}</span>
        <span className="users-at">@{currentUser ? currentUser.username : ""}</span>
      </div>
      <div className="pd-bio">
        <p className="users-bio">
          {currentUser ? currentUser.bio : ""}
        </p>
      </div>
      <div className="pd-stats">
        <p>
          {currentUser ? currentUser.noFollowing : 0} <span className="note">following</span>
        </p>
        <p>
          {currentUser ? currentUser.noFollowers : 0} <span className="note">followers</span>
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
