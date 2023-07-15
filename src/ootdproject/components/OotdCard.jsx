import React from "react";
import Avartar from "../components/Avartar";
import image from "../icon/basicAvatar.png";
import { styled } from "styled-components";

function OotdCard() {
	return (
		<StOotdContainer>
			<StProfile>
				<Avartar image={image} type='homeAvatar' />
			</StProfile>
		</StOotdContainer>
	);
}

export default OotdCard;

const StOotdContainer = styled.div`
	width: 60vh;
	height: 100vh;
	margin: 0 auto;
	background-color: blue;
`;

const StProfile = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
