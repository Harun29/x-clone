import "../../styles/cards.css";
import BackIcon from "../../icons/BackIcon";

const LocationCard = () => {
  return (
    <form className="card-form">
      <button className="exit-button">
        <BackIcon />
      </button>

      <div className="verfication-card-content-container">
        <div className="card-logo">
          <img src="xlogo.png" alt="" />
        </div>

        <span className="card-header-span">Where do you live?</span>
        <span className="card-header-span-note">
          Enter your location below.
        </span>

        <div className="card-input">
          <input type="text" placeholder="Location" />
          <div className="word-counter-card"></div>
        </div>
      </div>

      <button className="skip-button">Skip for now</button>
    </form>
  );
};

export default LocationCard;
