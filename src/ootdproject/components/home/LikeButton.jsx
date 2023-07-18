import React from "react";

import styled from "styled-components";
import EmptyHeartImg from "../../icon/emptyHeartImg.png";
import HeartImg from "../../icon/heartImg.png";

// const Heart = styled.img``;

const LikeButton = ({ like, onClick }) => {
	return (
		<>
			<StButton onClick={onClick}>
				<img src={like ? HeartImg : EmptyHeartImg} />
			</StButton>
		</>
	);
};

export default LikeButton;

const StButton = styled.button`
	width: 50px;
	border: none;
	background-color: transparent;
	cursor: pointer;
`;
