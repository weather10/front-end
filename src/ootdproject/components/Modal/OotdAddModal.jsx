import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { styled } from "styled-components";
import Avatar from "../home/Avatar";
import MyDropzone, { StShowImg, StUploadBtn } from "./MyDropzone";

function OotdAddlModal({ addModal }) {
	const [ootdClose, setOotdClose] = useState(false);

	const closeModal = () => {
		setOotdClose(true);
	};

	return (
		<div>
			{addModal && (
				<>
					<StEditModal>
						<GrClose size={20} cursor='pointer' onClick={closeModal} />
						<StModalBox>
							<div>
								<MyDropzone />
								<StUploadBtn
								// onClick={saveOotd}ㅛ
								>
									Upload
								</StUploadBtn>
							</div>
						</StModalBox>
					</StEditModal>
				</>
			)}
		</div>
	);
}

export default OotdAddlModal;

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
	width: 800px;
	height: 800px;
	border-radius: 12px;
	align-items: center;
	justify-content: center;
`;
