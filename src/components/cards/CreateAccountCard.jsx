const CreateAccountCard = () => {
  return ( 
    <form>
      <button className="exit-button"></button>
      <div className="card-logo">
        <img src="" alt="" />
      </div>
      <div className="name-input-card">
        <input type="text" />
        <div className="word-counter-card"></div>
      </div>
      <div className="email-card-input">
        <input type="text" />
        <div className="word-counter-card"></div>
      </div>
      <span className="date-of-birth">Date of birth</span>
      <span className="bitrhday-warrning">This will not be shown publicaly. Confirm your age, even if this account is for bussiness, a pet, or something else.</span>
    </form>
   );
}
 
export default CreateAccountCard;