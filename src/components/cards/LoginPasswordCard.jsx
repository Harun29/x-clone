import XIcon from "../../icons/XIcon";
import "../../styles/cards.css";

const LoginPasswordCard = () => {
  return (
    <form className="card-form">
      <button className="exit-button">
        <XIcon />
      </button>
      <div className="verfication-card-content-container">
        <div className="card-logo">
          <img src="xlogo.png" alt="" />
        </div>

        <span className="card-header-span">Enter your password</span>

        <div className="card-input card-input-sign-in">
          <input
            type="text"
            placeholder="Username"
            disabled
            value={"username"}
          />
        </div>

        <div className="card-input card-input-sign-in">
          <input type="password" placeholder="Password" />
          <span className="verification-note">Forgot password?</span>
        </div>
      </div>

      <div>
        <button className="card-next-button">Log in</button>

        <p className="note">
          Don't have an account? <a className="link">Sign up</a>
        </p>
      </div>
    </form>
  );
};

export default LoginPasswordCard;
