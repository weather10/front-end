import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsFillCloudUploadFill } from 'react-icons/bs';

import { GrClose } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

// yarn add react-dropzone

const MyDropzone = () => {
	const [uploadedFiles, setUploadedFiles] = useState('');
	const onDrop = acceptedFiles => {
		setUploadedFiles(acceptedFiles);
		console.log(acceptedFiles);
	};
	const navigate = useNavigate();
	// const navigateToPersonalData = () => {
	// 	navigate('/PersonalData');
	// };
	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />

			<STdropBoxTitle onClick={e => e.stopPropagation()}>
				Drag & Drop
				<GrClose
					onClick={() => {
						navigate('/');
					}}
				/>
			</STdropBoxTitle>

			{uploadedFiles.length == 0 && (
				<StImageUl>
					<BsFillCloudUploadFill size="100px" />
				</StImageUl>
			)}

			{uploadedFiles.length == 1 && (
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
			<StUploadBtn onClick={e => e.stopPropagation()}>Upload</StUploadBtn>
		</div>
	);
};
export default MyDropzone;

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
	/* border: 3px solid #a7d2ec; */
	background-color: rgba(255, 255, 255, 0.492);
	border-radius: 15%;
	/* border-style: dashed; */
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StShowImg = styled.div`
	/* background-color: pink; */
	display: flex;
	justify-content: center;
	align-items: center;
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
