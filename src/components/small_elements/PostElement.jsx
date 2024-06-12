import BookmarkIcon from "../../icons/BookmarkIcon";
import CommentsIcon from "../../icons/CommentsIcon";
import HeartIcon from "../../icons/HeartIcon";
import ArrowsIcon from "../../icons/ArrowsIcon";
import DotsIcon from "../../icons/DotsIcon";

const PostElement = () => {
  return (
    <div className="post-element">
      <div className="post-element-left-side">
        <img
          src="test-profile-picture.jpg"
          alt=""
          className="small-profile-picture"
        />
      </div>
      <div className="post-element-right-side">
        <div className="post-element-users-info-and-settings">
          <div className="post-element-users-info">
            <span className="users-name">Harun</span>
            <span className="users-at">@Harun2903</span>
          </div>
          <div className="post-element-settings">
            <div className="post-element-settings-icon">
              <DotsIcon />
            </div>
          </div>
        </div>
        <p className="post-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          dictum nunc vel gravida sodales. Vivamus tempus scelerisque sem.
          Quisque ornare eget urna in pellentesque. Vivamus sed urna enim.
        </p>
        <div className="post-element-interactions">
          <div className="post-element-comment">
            <div className="post-element-comment-icon">
              <CommentsIcon />
            </div>
            <span>8.3K</span>
          </div>
          <div className="post-element-retweet">
            <div className="post-element-retweet-icon">
              <ArrowsIcon />
            </div>
            <span>3.1K</span>
          </div>
          <div className="post-element-like">
            <div className="post-element-like-icon">
              <HeartIcon />
            </div>
            <span>95K</span>
          </div>
          <div className="post-element-bookmark">
            <div className="post-element-bookmark-icon">
              <BookmarkIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostElement;
