import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import PersonalDataEditModal from '../components/Modal/PersonalDataEditModal';
import avatar from '../icon/basicAvatar.png';
import { StOotdGramContainer, StSignInput } from './SignIn';
function PersonalData() {
	const navigate = useNavigate();
	const navigateToHome = () => {
		navigate(-1);
	};

	const [editModal, setEditModal] = useState(false);
	// const [personalClose, setPersonalClose] = useState(false);

	// const personalCloseModal = () => {
	// 	setPersonalClose(true);
	// };

	const toggleEditModal = () => {
		setEditModal(pre => !pre);
	};

	const [name, setName] = useState('');

	return (
		<StOotdGramContainer>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '320px',
					marginTop: '100px',
				}}
			>
				<GrClose
					size={20}
					style={{
						cursor: 'pointer',
					}}
					onClick={navigateToHome}
				/>
				<StFont> Edit profile</StFont>
				<FaCheck
					size={20}
					color="rgb(72, 132, 238)"
					cursor="pointer"
					// onClick={서버에 사진 저장하기}
				/>
			</div>
			<img src={avatar} alt="아바타" />
			<StFont $fontColor={'blue'} style={{ cursor: 'pointer' }} onClick={toggleEditModal}>
				{' '}
				Change profile photo{' '}
			</StFont>

			<StSignInput placeholder="NickName" value={name} onChange={e => setName(e.target.value)} />
			<div
				style={{
					height: '500px',
				}}
			></div>
			<PersonalDataEditModal editModal={editModal} toggleEditModal={toggleEditModal} />
		</StOotdGramContainer>
	);
}

export default PersonalData;

const StFont = styled.p`
	font-family: 'GowunDodum-Regular';
	font-weight: 700;

	${props => fontColorHandler(props.$fontColor)};

	${({ $fontColor }) => fontColorHandler($fontColor)};
`;

const fontColorHandler = color => {
	switch (color) {
		case 'blue':
			return `color:rgb(72, 132, 238);`;
		default:
			return '';
	}
};
