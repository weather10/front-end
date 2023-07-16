import React from "react";
import Avartar from "../components/Avartar";
import image from "../icon/basicAvatar.png";

function PersonalData() {
	return (
		<div>
			PersonalData
			<Avartar image={image} type='editAvatar' />
		</div>
	);
}

export default PersonalData;

const StFont = styled.p`
	font-family: "GowunDodum-Regular";
	font-weight: 700;
	${(props) => fontColorHandler(props.$fontColor)};

	${({ $fontColor }) => fontColorHandler($fontColor)};
`;

const fontColorHandler = (color) => {
	switch (color) {
		case "blue":
			return `color:rgb(72, 132, 238);`;
		default:
			return "";
	}
};

const StEditModal = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
`;

const StModalBox = styled.div`
	display: flex;
	background-color: rgba(255, 255, 255, 0.875);
	width: 500px;
	height: 500px;
	border-radius: 12px;
	align-items: center;
	justify-content: center;
`;
