import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

const ProfileDetail = ({username}) => {

  const {currentUser, getUserByUsername} = useAuth();
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async() => {
      const userData = await getUserByUsername(username);
      setUser(userData)
    }
    if(!username){
      setUser(currentUser)
    }else{
      fetchUser()
    }
  }, [username, getUserByUsername, currentUser])

  useEffect(() => {
    console.log("aaaaaaaaaaaaaaaa:", user)
  }, [user])

  return (user && 
    (<div className="profile-detail">
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
        <button className="follow-button">{(!username) ? "Edit profile" : "Follow"}</button>
      </div>
      <div className="pd-information">
        <span className="users-name">{user.name}</span>
        <span className="users-at">@{user.username}</span>
      </div>
      <div className="pd-bio">
        <p className="users-bio">
          {user.bio}
        </p>
      </div>
      <div className="pd-stats">
        <p>
          {user.noFollowing} <span className="note">following</span>
        </p>
        <p>
          {user.noFollowers} <span className="note">followers</span>
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
    </div>)
  );
};

export default ProfileDetail;
