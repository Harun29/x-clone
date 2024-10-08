import { usePosts } from "../../context/PostsContext";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import PhotoIcon from "../../icons/PhotoIcon";
import SmileIcon from "../../icons/SmileIcon";

const NewPostElment = () => {

  const {currentUser} = useAuth()
  const {createPost} = usePosts();
  const [postContent, setPostContent] = useState("");
  const [loading, setLoading] = useState(false);

  const addPost = async() =>{
    try{
      if(currentUser && postContent){
        setLoading(true)
        await createPost(currentUser.userId, postContent);
        setPostContent("")
        setLoading(false)
      }
      console.log("created post")
    }catch(err){
      setLoading(false)
      console.error("error creating post: ", err)
    }
  }

  useEffect(() => {
    console.log(postContent)
  }, [postContent])

  return ( 
    <div className="new-post-element">
      <div className="new-post-element-ls">
        <img src="test-profile-picture.jpg" alt="" className="small-profile-picture"/>
      </div>
      <div className="new-post-element-rs">
        <textarea type="message" value={postContent} onChange={(e) => setPostContent(e.target.value)} placeholder="What is happening?" className="new-post-input"/>
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
            <button disabled={loading} onClick={addPost} className="navbar-post-button new-post-element-button">Post</button>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default NewPostElment;