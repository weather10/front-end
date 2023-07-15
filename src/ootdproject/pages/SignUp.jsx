import React, { useState } from 'react';
import signLogo from '../icon/logo.png';
import { StInputForm, StSignButton, StOotdGramContainer, StSignInput, StSignLogo } from './SignIn';

function SignUp() {
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
		} else {
			alert('비밀번호 확인을 입력해주세요.');
		}
	};

	return (
		<StOotdGramContainer>
			<StSignLogo src={signLogo} alt="로고" />

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
			<StSignButton $bgColor={'gray'}>
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
