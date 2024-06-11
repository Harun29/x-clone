import '../../styles/cards.css'

const CreateAccountCard = () => {
  return ( 
    <form className='card-form'>
      <button className="exit-button">X</button>

      <div className="card-logo">
        <img src="xlogo.png" alt="" />
      </div>

      <span className='card-header-span'>Create your account</span>

      <div className="card-input">
        <input type="text" placeholder='Name'/>
        <div className="word-counter-card"></div>
      </div>

      <div className="card-input">
        <input type="text" placeholder='Email'/>
        <div className="word-counter-card"></div>
      </div>

      <div className='birthday-note'>
        <span className="date-of-birth">Date of birth</span>
        <span className="birthday-warning">This will not be shown publicaly. Confirm your age, even if this account is for bussiness, a pet, or something else.</span>
      </div>

      
      <div className='create-account-birthday'>
        <select name="month" id="month">
          <option value="Jan">Jan</option>
          <option value="Feb">Feb</option>
          <option value="Mar">Mar</option>
        </select>

        <select name="day" id="day">
          <option value="First">1.</option>
          <option value="Second">2.</option>
          <option value="Third">3.</option>
        </select>

        <select name="year" id="year">
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
        </select>
      </div>

      <button className='card-next-button'>Next</button>

    </form>
   );
}
 
export default CreateAccountCard;