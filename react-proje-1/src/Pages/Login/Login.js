import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

import "./Login.style.css";
const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [result, setResult] = useState("");
	const [resultMsg, setResultMsg] = useState("");

	useEffect(() => {
		if (result === 1) {
			setResultMsg("Success");
		} else if (result === 2) {
			setResultMsg("Error");
		}
	}, [result]);

	const loginCheck = () => {
		if (username === "admin" && password === "admin") {
			setResult(1);
		} else {
			setResult(2);
		}
	};
	return (
		<div className="main-container">
			<input type="text" className="input-text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
			<input type="text" className="input-text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
			<div className="login-btn" onClick={() => loginCheck()}>
				<span>Login Here</span>
			</div>
			<Button variant="success">Primary</Button> <p className={result === 1 ? "success" : "error"}>{resultMsg}</p>
		</div>
	);
};

export default Login;
