import XIcon from "../../icons/XIcon";
import SmileIcon from "../../icons/SmileIcon";
import PhotoIcon from "../../icons/PhotoIcon";
import "../../styles/cards.css"

const NewPostCard = () => {
  return (
    <div className="new-post-card">
      <div className="exit-button">
        <XIcon />
      </div>
      <div className="new-post-card-ts">
        <img
          src="test-profile-picture.jpg"
          alt=""
          className="small-profile-picture"
        />
        <textarea
          type="message"
          placeholder="What is happening?"
          className="new-post-input"
        />
      </div>
      <div className="new-post-card-bs">
        <div className="new-post-bs-ls">
          <div className="post-element-comment-icon new-post-icon">
            <PhotoIcon />
          </div>
          <div className="post-element-comment-icon new-post-icon">
            <SmileIcon />
          </div>
        </div>
        <div className="new-post-bs-rs">
          <button className="navbar-post-button new-post-element-button">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPostCard;
