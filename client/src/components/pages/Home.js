import React, {useState, useEffect} from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

const Home = (props) => {
	return (
	<div>
		<p>Hello, {props.username}</p>
		<br />
		<a href="submit">Submit dream</a>
		<br />
		<a href="dreams">View your dreams</a>
		<br />
		<a href="profile">Profile</a>
		<br />
		<a href="feed">Feed</a>
		<br />
		<button onClick={props.handleLogout}>Logout</button>
	</div>
	);
}

export default Home;
