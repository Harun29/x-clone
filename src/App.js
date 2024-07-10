import HomePage from "./components/pages/HomePage";
import ProfilePage from "./components/pages/ProfilePage";
import SignUpPage from "./components/pages/SignUpPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PostsProvider } from "./context/PostsContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <PostsProvider>
      <AuthProvider>
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" Component={HomePage}/>
              <Route path="/profile" Component={ProfilePage}/>
              <Route path="/signup" Component={SignUpPage}/>
              <Route path="/user/:username" Component={ProfilePage} />
            </Routes>
          </Router>
        </div>
      </AuthProvider>
    </PostsProvider>
  );
}

export default App;