import { useEffect, useState } from "react";
import "../../styles/elements.css";

const FollowUserElement = ({description}) => {

  const [showDescription, setShowDescription] = useState(true);

  useEffect(() => {
    if (!description && description != undefined){
      setShowDescription(false)
    }else{
      setShowDescription(true)
    }
  }, [description])

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

      {showDescription ? <p className="follow-user-bottom-section">
        This is my random short description
      </p> : null}
    </div>
  );
};

export default FollowUserElement;
