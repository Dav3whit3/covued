import React from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { SideBar } from "../components/SideBar/SideBar";


export const HomePage = () => {
	return (
		<div className="App">
				<NavBar />
				<SideBar />
		</div>
	);
}