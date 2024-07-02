import HomePage from "./components/pages/HomePage";
import ProfilePage from "./components/pages/ProfilePage";
import SignUpPage from "./components/pages/SignUpPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReplyCard from "./components/cards/ReplyCard";
import CommentedPostElement from "./components/small_elements/CommentedPostElement";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={HomePage}/>
          <Route path="/profile" Component={ProfilePage}/>
          <Route path="/signup" Component={SignUpPage}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;