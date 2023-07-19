import React from 'react';
import { styled } from 'styled-components';
import PersonalDropZone from './PersonalDropZone';

function PersonalDataEditModal({ editModal, toggleEditModal }) {
	return (
		<div>
			{editModal && (
				<>
					<StEditModal>
						<StModalBox onClick={e => e.stopPropagation()}>
							<div>
								<PersonalDropZone toggleEditModal={toggleEditModal} />
								<StUploadBtn>Upload</StUploadBtn>
							</div>
						</StModalBox>
					</StEditModal>
				</>
			)}
		</div>
	);
}

export default PersonalDataEditModal;

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

const StUploadBtn = styled.button`
	font-family: 'LeferiPoint-SpecialItalicA';
	font-weight: 600;
	font-size: 20px;
	border: none;
	border-radius: 100px;
	margin-top: 30px;
	padding-top: 6px;
	background: linear-gradient(45deg, #1fa0f0, #e67bcd, #ffffff, #a7d2ec);
	color: black;
	width: 500px;
	height: 50px;
	&:hover {
		letter-spacing: 5px;
		transform: scale(1.2);
		cursor: pointer;
	}
`;
