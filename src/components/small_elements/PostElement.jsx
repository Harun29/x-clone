import BookmarkIcon from "../../icons/BookmarkIcon";
import CommentsIcon from "../../icons/CommentsIcon";
import HeartIcon from "../../icons/HeartIcon";
import ArrowsIcon from "../../icons/ArrowsIcon";
import DotsIcon from "../../icons/DotsIcon";
import { useEffect, useState } from "react";
import { usePosts } from "../../context/PostsContext";
import { useAuth } from "../../context/AuthContext";
import XIcon from "../../icons/XIcon";

const PostElement = ({content, name, username, noComments, noReposts, noLikes, type, postId, reposted}) => {

  const [profilePicture, setProfilePicture] = useState();
  const [editActive, setEditActive] = useState(false);
  const { deletePost, updatePost, repost } = usePosts();
  const { currentUser } = useAuth();
  const [edit, setEdit] = useState();
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    if(content){
      setPostContent(content)
    }
  }, [edit, content])

  const deletePostCommand = async() => {
    try{
      await deletePost(postId)
      setEditActive(false)
    }catch(err){
      console.error(err)
    }
  }

  const editPost = async() => {
    try{
      await updatePost(postId, currentUser.userId, postContent)
      setEdit(false)
      setEditActive(false)
    }catch(err){
      console.error(err);
    }
  }

  useEffect(() =>{
    if(type === "profile" && !reposted){
      setProfilePicture("test-profile-picture.jpg")
    }else{
      setProfilePicture("dummy-photo.jpg")
    }
  }, [type])

  const toggleEdit = () => {
    if(type === "profile"){
      setEditActive(!editActive)
    }
  }

  const handleRepost = () => {
    const repostPost = async(postid, userid) => {
      await repost(postid, userid)
      alert("reposted")
    }
    try{
      repostPost(postId, currentUser.userId);
    }catch(err){
      console.error("error reposting: ", err)
    }
  }

  useEffect(() => {
    console.log(postId, currentUser.userId)
  }, [postId, currentUser])

  // const handleLike = () => {

  // }

  return (
    <div className="post-element-container">
    {reposted && <div className="repost-label">
      <ArrowsIcon />
      <span>{currentUser.username}</span>
      <span>reposted</span>
    </div>}
    <div className="post-element">
      <div className="post-element-left-side">
        <img
          // src={`data:image/jpeg;base64,${profilePicture}`}
          src={profilePicture}
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
            <div onClick={toggleEdit} className="post-element-settings-icon">
              {!editActive ? 
              <DotsIcon /> :
              <XIcon />}
            </div>
            {(type === "profile" && editActive) ? 
            <div className="edit-post-element">
              {!edit ? <button onClick={deletePostCommand}>Delete</button>:
              <button onClick={() => setEdit(false)}>Discard</button>}
              <div className="line"></div>
              {!edit ? <button onClick={() => setEdit(true)}>Edit</button>:
              <button onClick={editPost}>Save</button>}
            </div> : null}
          </div>
        </div>
        {!edit ? <p className="post-paragraph">
          {content ? content : ""}
        </p> : 
        <textarea className="post-paragraph-edit" onChange={(e) => setPostContent(e.target.value)} value={postContent}></textarea>}
        <div className="post-element-interactions">
          <div className="post-element-comment">
            <div className="post-element-comment-icon">
              <CommentsIcon />
            </div>
            <span>{noComments ? noComments : 0}</span>
          </div>
          <div onClick={handleRepost} className="post-element-retweet">
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
    </div>
  );
};

export default PostElement;
