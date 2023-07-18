import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { styled } from 'styled-components';
import MyDropzone, { StUploadBtn } from './MyDropzone';
function PersonalDataEditModal({ editModal, personalCloseModal }) {
	// const [personalClose, setPersonalClose] = useState(false);

	// const personalCloseModal = () => {
	// 	setPersonalClose(true);
	// };

	return (
		<div>
			{editModal && (
				<>
					<StEditModal>
						<StModalBox>
							<div>
								<RiCloseCircleLine size={50} display="flex" onClick={personalCloseModal} />
								<MyDropzone />

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
