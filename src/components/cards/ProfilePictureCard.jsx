import '../../styles/cards.css'
import CameraIcon from '../../icons/CameraIcon';

const ProfilePictureCard = () => {
  return ( 
    <form className='card-form'>

      <div className="verfication-card-content-container">
        <div className="card-logo">
          <img src="xlogo.png" alt="" />
        </div>

        <span className='card-header-span'>Pick a profile picture</span>
        <span className="card-header-span-note">Have a favorite selfie? Upload it now.</span>
      </div>

      <div className='white-moved-border'>
        <div className="picture-input-container">
          <input type="file" className="picture-input"/>
          <div className='icon-wrapper'>
            <CameraIcon width="35" height="35"/>
          </div>
        </div>
      </div>

      <button className='skip-button'>Skip for now</button>

    </form>
   );
}
 
export default ProfilePictureCard;