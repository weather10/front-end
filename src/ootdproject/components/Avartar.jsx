import React from "react";
import { styled } from "styled-components";

export default function Avartar({ image, type }) {
	return (
		<StAvatar>
			<StPhoto src={image} alt='avatar' type={type} />
		</StAvatar>
	);
}

const StPhoto = styled.img`
	border-radius: 100%;
	${({ type }) => sizeHandler(type)};
`;

const StAvatar = styled.div`
	margin: auto;
`;

const sizeHandler = (type) => {
	switch (type) {
		case "editAvatar":
			return `width: 80px; height: 80px;`;
		case "homeAvatar":
			return `width: 36px; height: 37px;`;
		default:
			return ``;
	}
};
