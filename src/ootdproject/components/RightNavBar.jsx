import React from "react";
import logo from "../icon/logo.png";
import { styled } from "styled-components";

function RightNavBar() {
	return (
		<StNavContainer>
			<NavLogo src={logo} alt='로고' />
		</StNavContainer>
	);
}

export default RightNavBar;

const StNavContainer = styled.div`
	width: 30%;
	background-color: beige;
`;
const NavLogo = styled.img`
	width: 200px;
	height: 50px;
`;
