import CreateAccountCard from './components/cards/CreateAccountCard';
import FollowInitialAccountsCard from './components/cards/FollowInitialAccountsCard';
import PasswordCard from './components/cards/PasswordCard';
import ProfilePictureCard from './components/cards/ProfilePictureCard';
import SignInCard from './components/cards/SignInCard';
import UsernameCard from './components/cards/UsernameCard';
import VerivicationCard from './components/cards/VerificationCard';
import SignUpPage from './components/pages/SignUpPage';

function App() {
  return (
    <div className="App">
      <SignUpPage />
      <SignInCard />
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
