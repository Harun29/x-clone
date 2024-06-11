import '../../styles/cards.css'
import BackIcon from "../../icons/BackIcon"

const VerivicationCard = () => {
  return ( 
    <form className='card-form'>
      <button className="exit-button">
        <BackIcon />
      </button>

      <div className="verfication-card-content-container">
        <div className="card-logo">
          <img src="xlogo.png" alt="" />
        </div>

        <span className='card-header-span'>We sent you a code</span>
        <span className="card-header-span-note">Enter it below to verify harun.ibrahimovic@email.com.</span>

        <div className="card-input">
          <input type="text" placeholder='Verification code'/>
          <div className="word-counter-card"></div>
        </div>

        <span className="verification-note">Didn't receive email?</span>
      </div>

      <button className='card-next-button'>Next</button>

    </form>
   );
}
 
export default VerivicationCard;