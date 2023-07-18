import React, { useRef } from "react";
import OotdCard from "../components/home/OotdCard";
import { styled } from "styled-components";
import RightNavBar from "../components/home/RightNavBar";

function Home() {
	const stCardCenterRef = useRef();
	return (
		<StOotdContainer>
			<StCardCenter ref={stCardCenterRef}>
				{/* data: [
					{
						id: 1,
						nickname: user,
						content: react ㅁㅝㅅ같다.
					},
					{
						id: 1,
						nickname: user,
						content: react ㅁㅝㅅ같다.
					},
					{
						id: 1,
						nickname: user,
						content: react ㅁㅝㅅ같다.
					},
					{
						id: 1,
						nickname: user,
						content: react ㅁㅝㅅ같다.
					},
				]
				{
					data.map
				} */}
				{/* nickname, content */}

				<OotdCard />
			</StCardCenter>
			<RightNavBar stCardCenterRef={stCardCenterRef} />
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
	max-height: 100vh;
	align-items: center;
	overflow-y: auto;
	/* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
	&::-webkit-scrollbar {
		display: none;
	}
`;
