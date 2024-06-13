import "../../styles/cards.css";
import CameraIcon from "../../icons/CameraIcon";
import BackIcon from "../../icons/BackIcon";

const PickHeaderCard = () => {
  return (
    <form className="card-form">
      <button className="exit-button">
        <BackIcon />
      </button>
      <div className="verfication-card-content-container">
        <div className="card-logo">
          <img src="xlogo.png" alt="" />
        </div>

        <span className="card-header-span">Pick a header</span>
        <span className="card-header-span-note">
          People who visit your profile will see it. Show your style.
        </span>
      </div>

      <div className="pick-header-container">
        <div className="picture-input-container pick-header-input-container">
          <input type="file" className="picture-input header-input" />
          <div className="icon-wrapper">
            <CameraIcon width="35" height="35" /> 
          </div>
        </div>
        <div className="header-card-users-info">
          <img src="test-profile-picture.jpg" alt="" className="medium-profile-picture pick-header-profile-picture"/>
          <div className="pick-header-users-names">
            <span className="users-name">Harun</span>
            <span className="users-at">@harun2903</span>
          </div>
        </div>
      </div>

      <button className="skip-button">Skip for now</button>
    </form>
  );
};

export default PickHeaderCard;
