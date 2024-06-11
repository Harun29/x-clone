import '../../styles/cards.css'
import FollowUserElement from '../elements/FollowUserElement';

const FollowInitialAccountsCard = () => {
  return ( 
    <form className='card-form'>

      <div className="verfication-card-content-container">
        <div className="card-logo">
          <img src="xlogo.png" alt="" />
        </div>

        <span className='card-header-span'>Don't miss out.</span>
        <span className="card-header-span-note">When you follow someone, you'll see their posts in your Timeline. You'll also get more relevant recommendations.</span>
      </div>

      <div className='follow-account-in-card'>
        <span className='follow-accounts-note'>Follow 1 or more account</span>
        <div className='accounts-container-in-card'>
          <FollowUserElement />
          <FollowUserElement />
          <FollowUserElement />
          <FollowUserElement />
          <FollowUserElement />
          <FollowUserElement />
          <FollowUserElement />
        </div>
      </div>

      <button className='card-next-button'>Next</button>
    </form>
   );
}
 
export default FollowInitialAccountsCard;