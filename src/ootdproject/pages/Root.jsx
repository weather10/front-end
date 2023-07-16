import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Weather from "../components/weather/Weather";

function root() {
	return (
		<StContainer>
			<Weather />
			<Outlet />
		</StContainer>
	);
}

export default root;

const StContainer = styled.div`
	display: flex;
`;
