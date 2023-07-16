import React from "react";

import styled from "styled-components";
import HeartImg from "../../icon/heartImg.png";
import EmptyHeartImg from "../../icon/emptyHeartImg.png";

const Heart = styled.img``;

const LikeButton = ({ like, onClick }) => {
	return <Heart src={like ? HeartImg : EmptyHeartImg} onClick={onClick} />;
};

export default LikeButton;
