import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { postBoard } from "../../axios/boardApi";
import OotdAddDropZone from "./OotdAddDropZone";

function OotdAddModal({ addModal, toggleOotdModal, onImageSelected, setUploadedFiles }) {
	const [ootdText, setOotdText] = useState("");
	const [selectedImage, setSelectedImage] = useState();

	const navigate = useNavigate();

	const handleKeyDown = (e) => {
		if (e.key === " ") {
			setOotdText((prevText) => prevText + " ");
			e.preventDefault();
		}
	};
	const imgAndPostHandler = async () => {
		try {
			const token = document.cookie.replace(/(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
			const headers = {
				Accept: "*/*",
				Authorization: `${token}`,
				"Content-Type": "multipart/form-data",
			};

			const formData = new FormData();

			const data = {
				content: ootdText,
			};

			formData.append("image", selectedImage[0]);
			formData.append("data", new Blob([JSON.stringify(data)], { type: "application/json" }));

			const response = await postBoard(formData, headers);
			console.log("ootdaddmodal - response.data:", response.data);

			toggleOotdModal();
		} catch (error) {
			console.error("imgAndPost전송 실패:", error);
		}
	};
	return (
		<div>
			{addModal && (
				<>
					<StBackGround>
						<StModalBox>
							<STdropBoxTitle>
								<p>Drag & Drop</p>
								<p>Write your OOTD</p>
							</STdropBoxTitle>
							<div onClick={(e) => e.stopPropagation()}>
								<OotdAddDropZone
									onImageSelected={setUploadedFiles}
									setSelectedImage={setSelectedImage}
								/>
							</div>
							<div onClick={toggleOotdModal}>
								<StWriteOotd
									value={ootdText}
									onKeyDown={handleKeyDown}
									onChange={(e) => setOotdText(e.target.value)}
								/>
							</div>
							<div onClick={(e) => e.stopPropagation()}>
								<StOotdUploadBtn onClick={imgAndPostHandler}>Upload</StOotdUploadBtn>
							</div>
						</StModalBox>
					</StBackGround>
				</>
			)}
		</div>
	);
}

export default OotdAddModal;

const StBackGround = styled.div`
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

	position: relative;
	background-color: rgba(255, 255, 255, 0.875);
	width: 900px;
	height: 700px;
	border-radius: 12px;
	align-items: center;
	justify-content: space-evenly;
`;

// 게시글
const StWriteOotd = styled.textarea`
	font-family: "omyu_pretty";
	width: 300px;
	height: 380px;
	font-size: 30px;
	background: linear-gradient(80deg, #9ed4f5, #ffe8fa, #f4ecf2, #fcfcfc, #d7f0ff, #9ed4f5);
	border: 12px ridge rgba(255, 202, 244, 0.298);
	word-wrap: break-word;
	resize: none;
`;

const STdropBoxTitle = styled.div`
	position: absolute;
	top: 80px;
	left: 40px;
	font-family: "LeferiPoint-SpecialItalicA";
	font-size: 27px;
	font-weight: 900;
	display: flex;
	align-items: center;
	margin-bottom: 15px;
	gap: 340px;
	color: rgba(0, 0, 0, 0.415);
`;

const StOotdUploadBtn = styled.button`
	position: absolute;
	bottom: 50px;
	right: 100px;
	font-family: "LeferiPoint-SpecialItalicA";
	font-weight: 600;
	font-size: 30px;
	border: none;
	border-radius: 100px;
	margin-top: 30px;
	padding-top: 6px;
	background: linear-gradient(45deg, #1fa0f0, #e67bcd, #ffffff, #a7d2ec);
	color: rgba(0, 0, 0, 0.655);
	width: 700px;
	height: 50px;
	&:hover {
		letter-spacing: 3px;
		transform: scale(1.2);
		cursor: pointer;
	}
`;
