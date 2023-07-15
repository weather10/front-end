import React, { useState } from 'react';
import { styled } from 'styled-components';
import signLogo from '../icon/logo.png';

function SignIn() {
	const [id, setId] = useState('');
	const [pw, setPw] = useState('');

	const onSubmitHandler = event => {
		event.preventDefault();
		if (id.trim() === '' && pw.trim() === '') {
			alert('ID, PW를 입력해주세요.');
		}
	};

	return (
		<StSignInContainer>
			<StSignLogo src={signLogo} alt="로고" />

			<StInputForm onSubmit={onSubmitHandler}>
				<StSignInput value={id} onChange={e => setId(e.target.value)} type="text" />
				<StSignInput value={pw} onChange={e => setPw(e.target.value)} type="password" />
				<StSignButton>Sign in</StSignButton>
			</StInputForm>
		</StSignInContainer>
	);
}

export default SignIn;

const StSignLogo = styled.img`
	width: 200px;
	height: 50px;
`;

const StSignInContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 60%;
	height: 120vh;
	background-color: pink;
`;

const StInputForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StSignInput = styled.input`
	background-color: #f4f4f4;
	width: 320px;
	height: 40px;
	border: none;
	border-radius: 6px;
	margin: 4px;
`;

const StSignButton = styled.button`
	background-color: rgba(72, 132, 238, 0.6);
	width: 320px;
	height: 40px;
	border: none;
	border-radius: 6px;
	margin: 4px;
	cursor: pointer;
`;
