import React from "react";
import OotdCard from "../components/home/OotdCard";
import { styled } from "styled-components";
import RightNavBar from "../components/home/RightNavBar";

function Home() {
	return (
		<StOotdContainer>
			<StCardCenter>
				<OotdCard />
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
`;

const StCardCenter = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
	height: 100vh;
	justify-content: center;
	align-items: center;
	overflow-x: hidden;
	/* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
	&::-webkit-scrollbar {
		display: none;
	}
`;
