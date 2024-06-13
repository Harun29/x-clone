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

function App() {
  return (
    <div className="App">

      <SignUpPage />

      <SearchElement />

      {/* customize profle */}
      <LocationCard />
      <CreateBioCard/>
      <SaveChangesCard />
      <PickHeaderCard />
      
      
      {/* page elements */}
      <PostElement />
      <Navbar />

      {/* sign in - in this order */}
      <SignInCard />
      <LoginPasswordCard />

      {/* sign up - in this order */}
      <CreateAccountCard />
      <VerivicationCard />
      <PasswordCard />
      <ProfilePictureCard />
      <UsernameCard />
      <FollowInitialAccountsCard />
    </div>
  );
}

export default App;
