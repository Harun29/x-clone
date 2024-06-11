import "../../styles/cards.css";
import "../../styles/pages.css";
import AppleIcon from "../../icons/AppleIcon";
import GoogleIcon from "../../icons/GoogleIcon";
import XIcon from "../../icons/XIcon";

const SignInCard = () => {
  return (
    <form className="card-form sign-in-card">
      <div className="card-logo">
        <img src="xlogo.png" alt="" />
      </div>
      <button className="exit-button">
        <XIcon />
      </button>
      <div className="sign-in-card-content-container">
        <div>
          <span className="card-header-span">Sign in to X</span>
        </div>

        <div className="sign-in-top-buttons">
          <button className="third-party-signup">
            <GoogleIcon />
            Sign in with Google
          </button>
          <button className="third-party-signup">
            <AppleIcon />
            Sign in with Apple
          </button>
        </div>
        <div className="or-statement-in-signup">
          <div className="white-line"></div>
          <span>or</span>
          <div className="white-line"></div>
        </div>

        <div className="card-input">
          <input type="text" placeholder="Email, or username" />
          <div className="word-counter-card"></div>
        </div>

        <div className="sign-in-bottom-buttons">
          <button className="card-next-button">Next</button>
          <button className="skip-button">Forgot password?</button>
        </div>

        <p className="note">
          Don't have an account? <a className="link">Sign up</a>
        </p>
      </div>
    </form>
  );
};

export default SignInCard;
