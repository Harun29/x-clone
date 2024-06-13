import "../../styles/cards.css";
import BackIcon from "../../icons/BackIcon";

const CreateBioCard = () => {
  return (
    <form className="card-form">
      <button className="exit-button">
        <BackIcon />
      </button>

      <div className="verfication-card-content-container">
        <div className="card-logo">
          <img src="xlogo.png" alt="" />
        </div>

        <span className="card-header-span">Describe yourself</span>
        <span className="card-header-span-note">
          What makes you special? Don't think too hard, just have fun with it.
        </span>

        <div className="card-input">
          <input type="text" placeholder="Your bio" />
          <div className="word-counter-card"></div>
        </div>
      </div>

      <button className="skip-button">Skip for now</button>
    </form>
  );
};

export default CreateBioCard;
