import '../../styles/cards.css'

const PasswordCard = () => {
  return ( 
    <form className='card-form'>

      <div className="verfication-card-content-container">
        <div className="card-logo">
          <img src="xlogo.png" alt="" />
        </div>

        <span className='card-header-span'>You'll need a password</span>
        <span className="card-header-span-note">Make sure it's 8 characters or more.</span>

        <div className="card-input">
          <input type="text" placeholder='Password'/>
          <div className="word-counter-card"></div>
        </div>
      </div>

      <div className='password-card-footer-container'>
        <p className="password-privacy-note">By signing up, you agree to the <a className='link'>Terms of Service</a> and <a className='link'> Privacy Policy</a>, including<a className='link'> Cookie Use </a>. X may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy, like keeping your account secure and personalizing our services, including ads.<a className='link'> Learn more</a>. Others will be able to find you by email or phone number when provided unless you choose otherwise<a className='link'> here</a>.</p>
        <button className='card-next-button'>Sign up</button>
      </div>

    </form>
   );
}
 
export default PasswordCard;