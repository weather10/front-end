import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signLogo from '../icon/logo.png';
import { StInputForm, StOotdGramContainer, StSignButton, StSignInput, StSignLogo } from './SignIn';

function SignUp() {
	const navigate = useNavigate();
	const [id, setId] = useState('');
	const [pw, setPw] = useState('');
	const [pw2, setPw2] = useState('');
	const [email, setEmail] = useState('');

	const onSubmitHandler = event => {
		event.preventDefault();
		if (id.trim() === '' && pw.trim() === '') {
			alert('ID를 입력해주세요.');
		} else if (!email) {
			alert('email을 입력해주세요.');
		} else if (!id) {
			alert('ID를 입력해주세요.');
		} else if (!pw) {
			alert('password를 입력해주세요.');
		} else if (pw !== pw2) {
			alert('비밀번호가 일치하지 않습니다.');
		} else {
			// 로그인성공로직
		}
	};

	return (
		<StOotdGramContainer>
			<StSignLogo
				onClick={() => {
					navigate('/');
				}}
				src={signLogo}
				alt="로고"
			/>

			<StInputForm onSubmit={onSubmitHandler}>
				<StSignInput placeholder="User Name" value={id} onChange={e => setId(e.target.value)} type="text" />
				<StSignInput placeholder="e-mail" value={email} onChange={e => setEmail(e.target.value)} type="text" />
				<StSignInput placeholder="Password" value={pw} onChange={e => setPw(e.target.value)} type="password" />
				<StSignInput
					placeholder="Password double check"
					value={pw2}
					onChange={e => setPw2(e.target.value)}
					type="password"
				/>
				<StSignButton type="submit" $bgColor={'blue'}>
					Sign up
				</StSignButton>
			</StInputForm>
			<p style={{ color: '#dfdbdb' }}>――――――――　OR　――――――――</p>
			<StSignButton
				$bgColor={'gray'}
				onClick={() => {
					navigate('/signin');
				}}
			>
				Already have an account? &nbsp;{' '}
				<span
					style={{
						fontWeight: '700',
					}}
				>
					Sign in.
				</span>
			</StSignButton>
		</StOotdGramContainer>
	);
}

export default SignUp;
