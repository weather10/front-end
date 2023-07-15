import React from "react";
import OotdCard from "../components/OotdCard";
import { styled } from "styled-components";
import RightNavBar from "../components/RightNavBar";

function Home() {
	return (
		<StOotdContainer>
			<StCardCenter>
				<OotdCard />
			</StCardCenter>
			<RightNavBar />
		</StOotdContainer>
	);
}

export default Home;

const StOotdContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 60%;
	height: 100vh;
	background-color: aqua;
`;

const StCardCenter = styled.div`
	display: flex;
	width: 70%;
	justify-content: center;
	background-color: brown;
`;
