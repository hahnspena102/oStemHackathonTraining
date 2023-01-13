import NavBar from "./components/navbar/navbar"
import Home from "./pages/home/home"
import PostPage from "./pages/postPage/postPage"
import WritePost from "./pages/writePost/writePost"
import Settings from "./pages/settings/settings"
import Login from "./pages/login/login"
import CreateAccount from "./pages/createAccount/createAccount"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const { currentUser } = false;
  console.log(currentUser);
  return (
      <Router>
          <NavBar />
          <Routes>
              <Route exact path="/" element={<Home />}>
              </Route>
              <Route path="/posts" element={<Home />} >
              </Route>
              <Route path="/createAccount" element={currentUser ? <Home /> : <CreateAccount />}>
              </Route>
              <Route path="/login" element={currentUser ? <Home /> : <Login />}></Route>
              <Route path="/post/:id" element={<PostPage />}>
              </Route>
              <Route path="/write" element={currentUser ? <WritePost /> : <Home />}></Route>
              <Route path="/settings" element={currentUser ? <Settings /> : <Home />}>
              </Route>
          </Routes>
      </Router>
  );
}

export default App;
