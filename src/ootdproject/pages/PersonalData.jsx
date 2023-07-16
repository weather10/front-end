import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import avatar from "../icon/basicAvatar.png";
import DropBox from "../components/imageUploader/DropBox";
import { StOotdGramContainer, StSignInput } from "./SignIn";

function PersonalData() {
	const navigate = useNavigate();
	const navigateToHome = () => {
		navigate(-1);
	};

	const [editModal, setEditModal] = useState(false);

	const openModal = () => {
		setEditModal(true);
	};

	const closeModal = () => {
		setEditModal(false);
	};

	const [name, setName] = useState("");
	return (
		<StOotdGramContainer>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					width: "320px",
				}}>
				<GrClose size={20} onClick={navigateToHome} cursor='pointer' />
				<StFont> Edit profile</StFont>
				<FaCheck
					size={20}
					color='rgb(72, 132, 238)'
					cursor='pointer'
					// onClick={서버에 사진 저장하기}
				/>
			</div>
			<img src={avatar} alt='아바타' />
			<StFont $fontColor={"blue"} style={{ cursor: "pointer" }} onClick={openModal}>
				{" "}
				Change profile photo{" "}
			</StFont>

			<StSignInput placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
			<div
				style={{
					height: "500px",
				}}></div>

			{editModal && (
				<>
					<StEditModal>
						<GrClose size={20} cursor='pointer' onClick={closeModal} />

						<StModalBox>
							<DropBox />
						</StModalBox>
					</StEditModal>
				</>
			)}
		</StOotdGramContainer>
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
