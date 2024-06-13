import "../../styles/cards.css";
import "../../styles/pages.css";
import XIcon from "../../icons/XIcon";

const SaveChangesCard = () => {
  return (
    <form className="card-form sign-in-card save-changes-container">
      <button className="exit-button">
        <XIcon />
      </button>
      <div className="sign-in-card-content-container save-changes-card">
        <div className="card-logo save-changes-logo">
          <img src="xlogo.png" alt="" />
        </div>
        <span className="card-header-span save-changes-span">Click to save updates</span>
        <button className="card-next-button save-changes-save-button">Save</button>
      </div>
    </form>
  );
};

export default SaveChangesCard;
