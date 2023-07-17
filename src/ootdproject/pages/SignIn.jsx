import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
// import { addTodos, deleteTodos, getTodos, modifyTodos } from '../axios/api';
import { useQuery } from 'react-query';
import { getPosts } from '../axios/api';
import signLogo from '../icon/logo.png';

function SignIn() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [pw, setPw] = useState('');
	// const queryClient = useQueryClient();
	// const mutation = useMutation(addPosts, {
	// 	onSuccess: ()=> {
	// 		queryClient.invalidateQueries('posts')
	// posts라는 이름을 가진 query를 다시 실행함. refresh
	// 		console.log('성공')
	// 	}
	// })
	// mutation.mutate(newPosts); dispatch처럼 쓰기

	// GET
	const { isLoading, isError, data } = useQuery('posts', getPosts);

	if (isLoading) {
		console.log('loading!!!');
	}
	if (isError) {
		console.log('error!!!');
	}
	if (data) {
		console.log('data!!!!');
	}

	// DELETE
	// const deleteTodoMutation = useMutation(deleteTodos, {
	// 	onsuccess: () => {
	// 		queryClient.invalidateQueries('todos');
	// 	},
	// });
	// onClick={()=>deleteTodoMutation.mutate(item.id)}

	// console.log(data);

	const onSubmitHandler = event => {
		event.preventDefault();
		if (email.trim() === '' && pw.trim() === '') {
			alert('id, PW를 입력하세요.');
		} else if (!email) {
			alert('email 혹은 id를 입력하세요.');
		} else if (!email) {
			alert('Password를 입력하세요.');
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
				<StSignInput placeholder="email" value={email} onChange={e => setEmail(e.target.value)} type="text" />
				<StSignInput placeholder="PassWord" value={pw} onChange={e => setPw(e.target.value)} type="password" />
				<StSignButton type="submit" $bgColor={'blue'}>
					Sign in
				</StSignButton>
			</StInputForm>
			<p style={{ color: '#dfdbdb' }}>――――――――　OR　――――――――</p>
			<StSignButton
				$bgColor={'gray'}
				onClick={() => {
					navigate('/signup');
				}}
			>
				Sign up
			</StSignButton>
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
