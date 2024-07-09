import BookmarkIcon from "../../icons/BookmarkIcon";
import CommentsIcon from "../../icons/CommentsIcon";
import HeartIcon from "../../icons/HeartIcon";
import ArrowsIcon from "../../icons/ArrowsIcon";
import DotsIcon from "../../icons/DotsIcon";

const PostElement = ({content, name, username, noComments, noReposts, noLikes, profilePicture}) => {

  return (
    <div className="post-element">
      <div className="post-element-left-side">
        <img
          // src={`data:image/jpeg;base64,${profilePicture}`}
          src="dummy-photo.jpg"
          alt=""
          className="small-profile-picture"
        />
      </div>
      <div className="post-element-right-side">
        <div className="post-element-users-info-and-settings">
          <div className="post-element-users-info">
            <span className="users-name">{name ? name : ""}</span>
            <span className="users-at">@{username ? username : ""}</span>
          </div>
          <div className="post-element-settings">
            <div className="post-element-settings-icon">
              <DotsIcon />
            </div>
          </div>
        </div>
        <p className="post-paragraph">
          {content ? content : ""}
        </p>
        <div className="post-element-interactions">
          <div className="post-element-comment">
            <div className="post-element-comment-icon">
              <CommentsIcon />
            </div>
            <span>{noComments ? noComments : 0}</span>
          </div>
          <div className="post-element-retweet">
            <div className="post-element-retweet-icon">
              <ArrowsIcon />
            </div>
            <span>{noReposts ? noReposts : 0}</span>
          </div>
          <div className="post-element-like">
            <div className="post-element-like-icon">
              <HeartIcon />
            </div>
            <span>{noLikes ? noLikes : 0}</span>
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
