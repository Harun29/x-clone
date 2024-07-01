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
import NewPostCard from "./components/cards/NewPostCard";
import HomePage from "./components/pages/HomePage";
import ProfileDetail from "./components/page_elements/ProfileDetails";
import ProfilePage from "./components/pages/ProfilePage";

function App() {
  return (
    <div className="App">

      {/* <SignUpPage /> */}
      {/* <HomePage /> */}
      <ProfilePage />
      {/* <ProfileDetail /> */}
    </div>
  );
}

export default App;
