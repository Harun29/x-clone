import XIcon from "../../icons/XIcon";
import SmileIcon from "../../icons/SmileIcon";
import PhotoIcon from "../../icons/PhotoIcon";
import "../../styles/cards.css";

const ReplyCard = () => {
  return (
    <div className="new-post-card reply-card">
      <div className="exit-button">
        <XIcon />
      </div>

      <div className="post-element commented-post-element reply-element">
        <div className="post-element-left-side">
          <img
            src="test-profile-picture.jpg"
            alt=""
            className="small-profile-picture"
          />
          <div className="commented-post-line"></div>
        </div>
        <div className="post-element-right-side">
          <div className="post-element-users-info-and-settings">
            <div className="post-element-users-info">
              <span className="users-name">Harun</span>
              <span className="users-at">@Harun2903</span>
            </div>
          </div>
          <p className="post-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            dictum nunc vel gravida sodales. Vivamus tempus scelerisque sem.
            Quisque ornare eget urna in pellentesque. Vivamus sed urna enim.
          </p>
          <div className="post-element-interactions">
            <span className="note reply-note">Replying to <span className="users-at">@elonmusk</span></span>
          </div>
        </div>
      </div>

      <div className="new-post-card-ts reply-ms">
        <img
          src="test-profile-picture.jpg"
          alt=""
          className="small-profile-picture"
        />
        <textarea
          type="message"
          placeholder="Post your reply"
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
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplyCard;
