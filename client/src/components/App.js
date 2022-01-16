import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Landing from "./pages/Landing.js";
import Home from "./pages/Home";
import WriteDream from "./pages/WriteDream";
import Profile from "./pages/Profile";
import MyDreams from "./pages/MyDreams";
import Feed from "./pages/Feed";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);
  const [username, setUsername] = useState("");

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
        setUsername(user.name);
      }
    });
  }, []);

  const handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      setUsername(user.name);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    setUsername("");
    post("/api/logout");
    window.location.href = "/";
  };

  return (
    <>
      {userId ? (
        <Router>
          <Home
            path="/"
            handleLogin={handleLogin}
            handleLogout={handleLogout}
            userId={userId}
            username={username}
          />
          <WriteDream
            path="/write"
            handleLogin={handleLogin}
            handleLogout={handleLogout}
            userId={userId}
            username={username}
          />
          <MyDreams
            path="/dreams"
            handleLogin={handleLogin}
            handleLogout={handleLogout}
            userId={userId}
            username={username}
          />
          <Profile
            path="/profile/:text"
            handleLogin={handleLogin}
            handleLogout={handleLogout}
            userId={userId}
            username={username}
          />
          <Feed
            path="/feed"
            handleLogin={handleLogin}
            handleLogout={handleLogout}
            userId={userId}
            username={username}
          />
          <NotFound default />
        </Router>
      ) : (
        <Router>
          <Landing path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
          <NotFound default />
        </Router>
      )}
    </>
  );
};

export default App;
