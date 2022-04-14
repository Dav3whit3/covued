import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { SignUpForm } from "../../views/signup";
import { HomePage } from "../../views/home";


function App() {
	return (
		<div className="App">
			<Routes>
        <Route path="signup" element={<SignUpForm />} />
        <Route path="/" element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;
