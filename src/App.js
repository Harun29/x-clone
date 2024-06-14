import CreateAccountCard from "./components/cards/CreateAccountCard";
import FollowInitialAccountsCard from "./components/cards/FollowInitialAccountsCard";
import PasswordCard from "./components/cards/PasswordCard";
import ProfilePictureCard from "./components/cards/ProfilePictureCard";
import SignInCard from "./components/cards/SignInCard";
import UsernameCard from "./components/cards/UsernameCard";
import VerivicationCard from "./components/cards/VerificationCard";
import SignUpPage from "./components/pages/SignUpPage";
import LoginPasswordCard from "./components/cards/LoginPasswordCard";
import Navbar from "./components/page_elements/Navbar";
import PostElement from "./components/small_elements/PostElement";
import SearchElement from "./components/small_elements/SearchElement";
import LocationCard from "./components/cards/LocationCard";
import CreateBioCard from "./components/cards/CreateBioCard";
import SaveChangesCard from "./components/cards/SaveChangesCard";
import PickHeaderCard from "./components/cards/PickHeaderCard";
import WhoToFollowElement from "./components/small_elements/WhoToFollowElement";
import NewPostElment from "./components/small_elements/NewPostElement";

function App() {
  return (
    <div className="App">

      <SignUpPage />

      <h1 className="temporary-note">Profile customization</h1>
      <div className="temporary-div">
      {/* customize profle */}
      <LocationCard />
      <CreateBioCard/>
      <SaveChangesCard />
      <PickHeaderCard />
      </div>
      
      <h1 className="temporary-note">Page elements</h1>
      {/* page elements */}
      <div className="temporary-div">
      <NewPostElment />
      <PostElement />
      <SearchElement />
      <WhoToFollowElement />
      <Navbar />
      </div>

      <h1 className="temporary-note">Sign in cards</h1>
      {/* sign in - in this order */}
      <div className="temporary-div">
      <SignInCard />
      <LoginPasswordCard />
      </div>

      <h1 className="temporary-note">Sign up cards</h1>
      {/* sign up - in this order */}
      <div className="temporary-div">
      <CreateAccountCard />
      <VerivicationCard />
      <PasswordCard />
      <ProfilePictureCard />
      <UsernameCard />
      <FollowInitialAccountsCard />
      </div>
    </div>
  );
}

export default App;
