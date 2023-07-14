import React from "react";
import { Outlet } from "react-router-dom";
import Weather from "../components/Weather";

function root() {
	return (
		<div>
			<Weather />
			<Outlet />
		</div>
	);
}

export default root;
