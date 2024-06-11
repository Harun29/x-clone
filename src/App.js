import CreateAccountCard from './components/cards/CreateAccountCard';
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
    </div>
  );
}

export default App;
