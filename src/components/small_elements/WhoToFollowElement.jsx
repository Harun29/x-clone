import FollowUserElement from "./FollowUserElement";
import "../../styles/elements.css"

const WhoToFollowElement = () => {
  return ( 
    <div className="who-to-follow">
      <span className="who-to-follow-span">Who to follow</span>
      <div className="who-to-follow-users-container">
        <FollowUserElement description={false}/>
        <FollowUserElement description={false}/>
        <FollowUserElement description={false}/>
      </div>
      <button className="link">Show more</button>
    </div>
   );
}
 
export default WhoToFollowElement;