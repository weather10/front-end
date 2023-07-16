import React, { useEffect, useRef, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { styled } from 'styled-components';
const DropBox = () => {
	const dropRef = useRef(null);
	const [selectedFiles, setSelectedFiles] = useState([]);

	const handleDrop = e => {
		e.preventDefault();
		const files = [...e.dataTransfer?.files];
		setSelectedFiles(files);
		console.log(files);
	};

	useEffect(() => {
		const dropArea = dropRef.current;

		const handleDragOver = e => {
			e.preventDefault();
		};

		dropArea.addEventListener('dragover', handleDragOver);
		dropArea.addEventListener('drop', handleDrop);

		return () => {
			dropArea.removeEventListener('dragover', handleDragOver);
			dropArea.removeEventListener('drop', handleDrop);
		};
	}, []);

	return (
		<StDropBox ref={dropRef}>
			<p>Drag & Drop</p>
			{selectedFiles.length > 0 && (
				<div>
					<p>file:</p>
					<ul>
						{selectedFiles.map(file => (
							<li key={file.name}>{file.name}</li>
						))}
					</ul>
					<ButtonBox>
						<FaCheck size={20} color="rgb(72, 130, 238)" cursor="pointer" />
					</ButtonBox>
				</div>
			)}
		</StDropBox>
	);
};

export default DropBox;

const StDropBox = styled.div`
	background-color: rgb(72, 132, 238, 0.5);
	font-family: 'GowunDodum-Regular';
	font-weight: 800px;
	width: 350px;
	height: 350px;
`;

const ButtonBox = styled.div`
	display: flex;
	position: relative;
	top: 20px;
	left: 100px;
	gap: 20px;
`;
