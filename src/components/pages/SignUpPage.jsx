import AppleIcon from "../../icons/AppleIcon";
import GoogleIcon from "../../icons/GoogleIcon";
import "../../styles/pages.css";

const SignUpPage = () => {
  return (
    <div className="signup-page">
      <div className="signup-left-side">
        <img className="signup-x-logo" src="xlogo.png" alt="" />
      </div>

      <div className="signup-right-side">
        <h1>Happening now</h1>
        <h3>Join today,</h3>
        <button className="third-party-signup">
          <GoogleIcon />
          Sign up with Google
        </button>
        <button className="third-party-signup">
          <AppleIcon />
          Sign up with Apple
        </button>
        <div className="or-statement">
          <div className="white-line"></div>
          <span>or</span>
          <div className="white-line"></div>
        </div>
        <button className="create-account-button">Create account</button>
        <p className="note sign-up-note">
          By singing up, you agree to the{" "}
          <a className="link">Terms of Services</a> and{" "}
          <a className="link">Privacy Policy</a>, including{" "}
          <a className="link">Cookie Use.</a>
        </p>

        <p className="already-have-acc">Already have an account?</p>
        <button className="sign-in-button">Sign in</button>
      </div>
    </div>
  );
};

export default SignUpPage;
