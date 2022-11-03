import "./App.css";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Post from "./pages/post/Post.jsx";
import Profile from "./pages/profile/Profile.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const { currentuser } = useSelector((state) => state.user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/register"
            element={!currentuser ? <Register /> : <Navigate to="/home" />}
          />
          <Route
            exact
            path="/"
            element={!currentuser ? <Login /> : <Navigate to="/home" />}
          />
          <Route
            path="/home"
            element={currentuser ? <Home /> : <Navigate to="/" />}
          />
          <Route
            path="/post/:id"
            element={currentuser ? <Post /> : <Navigate to="/" />}
          />
          <Route
            path="/profile/:id"
            element={currentuser ? <Profile /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
      {/* <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={true}
      /> */}
    </>
  );
}

export default App;
