import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import Home from "./pages/Home";
import SubmitDream from "./pages/writedream/SubmitDream";
import GetDream from "./pages/writedream/GetDream";

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
  };

  return ( 
    <>
	  {userId ?
      <Router>
        <Home path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} username={username}/>
	<SubmitDream path="/submit" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} username={username}/>
	<GetDream path="/dreams" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} username={username}/>
        <NotFound default />
      </Router> :
	  <Router>
        <Skeleton path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
        <NotFound default />
	  </Router>}
    </>
  );
};

export default App;
