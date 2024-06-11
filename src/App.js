import CreateAccountCard from './components/cards/CreateAccountCard';
import PasswordCard from './components/cards/PasswordCard';
import ProfilePictureCard from './components/cards/ProfilePictureCard';
import VerivicationCard from './components/cards/VerificationCard';

function App() {
  return (
    <div className="App">
      <CreateAccountCard />
      <VerivicationCard />
      <PasswordCard />
      <ProfilePictureCard />
    </div>
  );
}

export default App;
