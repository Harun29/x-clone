import CreateAccountCard from './components/cards/CreateAccountCard';
import FollowInitialAccountsCard from './components/cards/FollowInitialAccountsCard';
import PasswordCard from './components/cards/PasswordCard';
import ProfilePictureCard from './components/cards/ProfilePictureCard';
import UsernameCard from './components/cards/UsernameCard';
import VerivicationCard from './components/cards/VerificationCard';

function App() {
  return (
    <div className="App">
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
