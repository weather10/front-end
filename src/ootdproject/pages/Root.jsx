import React from "react";
import { Outlet } from "react-router-dom";
import Weather from "../components/Weather";
import { styled } from "styled-components";

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
