const UsernameCard = () => {
  return (
    <form className="card-form">
      <div className="verfication-card-content-container">
        <div className="card-logo">
          <img src="xlogo.png" alt="" />
        </div>

        <span className="card-header-span">What should we call you?</span>
        <span className="card-header-span-note">
          Your @username is unique. You can always change it later.
        </span>

        <div className="card-input">
          <input type="text" placeholder="Username" />
        </div>
      </div>

      <button className="skip-button">Skip for now</button>
    </form>
  );
};

export default UsernameCard;
