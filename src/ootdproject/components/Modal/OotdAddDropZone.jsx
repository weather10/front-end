import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsFillCloudUploadFill } from 'react-icons/bs';
// import { GrClose } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const OotdAddDropZone = ({ toggleOotdModal }) => {
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
			{/* 
			<STdropBoxTitle onClick={e => e.stopPropagation()}>
				Drag & Drop
				<GrClose onClick={toggleOotdModal} />
			</STdropBoxTitle> */}

			{uploadedFiles.length === 0 && (
				<StImageUl>
					<BsFillCloudUploadFill size="50px" color="pink" />
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
									minWidth: '480px',
									maxWidth: '480px',
									minHeight: '380px',
									maxHeight: '380px',
									display: 'flex',
									justifyContent: 'center',
									alignContent: 'center',
								}}
							/>
						</StShowImg>
					))}
				</div>
			)}
			{/* <StUploadBtn onClick={e => e.stopPropagation()}>Upload</StUploadBtn> */}
			{/* <StUploadBtn onClick={e => e.stopPropagation()}>Upload</StUploadBtn> 여기에 버튼 넣어서 사용하시면 됩니당 */}
		</div>
	);
};
export default OotdAddDropZone;

// const STdropBoxTitle = styled.div`
// 	font-family: 'LeferiPoint-SpecialItalicA';
// 	font-size: 35px;
// 	font-weight: 900;
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	margin-bottom: 15px;
// `;

// 업로드하는곳
const StImageUl = styled.div`
	width: 480px;
	height: 380px;
	background-color: rgba(255, 255, 255, 0.492);
	display: flex;
	align-items: center;
	justify-content: center;
	border: 12px ridge rgba(255, 202, 244, 0.298);
`;

export const StShowImg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
