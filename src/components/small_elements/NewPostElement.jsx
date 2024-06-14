import PhotoIcon from "../../icons/PhotoIcon";
import SmileIcon from "../../icons/SmileIcon";

const NewPostElment = () => {
  return ( 
    <div className="new-post-element">
      <div className="new-post-element-ls">
        <img src="test-profile-picture.jpg" alt="" className="small-profile-picture"/>
      </div>
      <div className="new-post-element-rs">
        <textarea type="message" placeholder="What is happening?" className="new-post-input"/>
        <div className="new-post-element-rs-bs">
          <div className="new-post-bs-ls">
            <div className="post-element-comment-icon new-post-icon">
              <PhotoIcon />
            </div>
            <div className="post-element-comment-icon new-post-icon">
              <SmileIcon />
            </div>
          </div>
          <div className="new-post-bs-rs">
            <button className="navbar-post-button new-post-element-button">Post</button>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default NewPostElment;