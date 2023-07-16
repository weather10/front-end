import React, { useState } from 'react';
import { styled } from 'styled-components';
import signLogo from '../icon/logo.png';

function SignIn() {
	const [id, setId] = useState('');
	const [pw, setPw] = useState('');

	const onSubmitHandler = event => {
		event.preventDefault();
		if (id.trim() === '' && pw.trim() === '') {
			alert('ID, PW를 입력하세요.');
		} else if (!id) {
			alert('email 혹은 ID를 입력하세요.');
		} else if (!pw) {
			alert('Password를 입력하세요.');
		}
	};

	return (
		<StOotdGramContainer>
			<StSignLogo src={signLogo} alt="로고" />

			<StInputForm onSubmit={onSubmitHandler}>
				<StSignInput
					placeholder="email or username"
					value={id}
					onChange={e => setId(e.target.value)}
					type="text"
				/>
				<StSignInput placeholder="PassWord" value={pw} onChange={e => setPw(e.target.value)} type="password" />
				<StSignButton type="submit" $bgColor={'blue'}>
					Sign in
				</StSignButton>
			</StInputForm>
			<p style={{ color: '#dfdbdb' }}>――――――――　OR　――――――――</p>
			<StSignButton $bgColor={'gray'}>Sign up</StSignButton>
		</StOotdGramContainer>
	);
}

export default SignIn;

export const StSignLogo = styled.img`
	width: 200px;
	height: 50px;
	margin-bottom: 80px;
`;

export const StOotdGramContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 60%;
	height: 100vh;
	background-color: #fafafa;
`;

export const StInputForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
`;

export const StSignInput = styled.input`
	background-color: #dfdbdb;
	width: 320px;
	height: 20px;
	border: none;
	border-radius: 6px;
	margin: 8px;
	padding: 10px;
`;

export const StSignButton = styled.button`
	width: 320px;
	height: 40px;
	border: none;
	border-radius: 6px;
	margin: 8px;
	padding: 10px;
	margin-top: 32px;
	cursor: pointer;
	&:active {
		filter: brightness(70%);
	}
	${props => colorHandler(props.$bgColor)};

	${({ $bgColor }) => colorHandler($bgColor)};
`;

const colorHandler = color => {
	switch (color) {
		case 'blue':
			return `background-color:rgba(72, 132, 238, 0.6); color : white;`;
		case 'gray':
			return `color: black; background-color: #dfdbdb`;
		default:
			return '';
	}
};
