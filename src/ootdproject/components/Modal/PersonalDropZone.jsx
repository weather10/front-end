import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsFillCloudUploadFill } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const PersonalDropZone = ({ toggleEditModal }) => {
	const [uploadedFiles, setUploadedFiles] = useState('');
	const onDrop = acceptedFiles => {
		setUploadedFiles(acceptedFiles);
		console.log(acceptedFiles);
	};
	const navigate = useNavigate();
	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />

			<STdropBoxTitle onClick={e => e.stopPropagation()}>
				Drag & Drop
				<GrClose onClick={toggleEditModal} />
			</STdropBoxTitle>

			{uploadedFiles.length === 0 && (
				<StImageUl>
					<BsFillCloudUploadFill size="100px" />
				</StImageUl>
			)}

			{uploadedFiles.length === 1 && (
				<div>
					{uploadedFiles.map(file => (
						<StShowImg>
							<img
								key={file.name}
								src={URL.createObjectURL(file)}
								alt={file.name}
								style={{
									maxWidth: '500px',
									maxHeight: '500px',
									display: 'flex',
									justifyContent: 'center',
									alignContent: 'center',
								}}
							/>
						</StShowImg>
					))}
				</div>
			)}
		</div>
	);
};
export default PersonalDropZone;

const STdropBoxTitle = styled.div`
	font-family: 'LeferiPoint-SpecialItalicA';
	font-size: 35px;
	font-weight: 900;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 15px;
`;

const StImageUl = styled.div`
	width: 500px;
	height: 500px;
	background-color: rgba(255, 255, 255, 0.492);
	border-radius: 15%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StShowImg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
