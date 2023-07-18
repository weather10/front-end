import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { postSignUp } from "../axios/api";
import signLogo from "../icon/logo.png";
import { StInputForm, StOotdGramContainer, StSignButton, StSignInput, StSignLogo } from "./SignIn";

function SignUp() {
	const navigate = useNavigate();
	const [nickname, setNickname] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [email, setEmail] = useState("");

	// get = useQuery
	// POST, DELETE, PATCH = useMutation
	const [postSignupMsg, setPostSignupMsg] = useState("");
	const postSignUpMutaion = useMutation(postSignUp, {
		onSuccess: (data) => {
			console.log(data); //
			// setPostSinupMsg(data)...
			// alert(postSignupMsg)
			// alert(data.resfadfs.messageg)
		},
		onError: (err) => {
			console.log(err.message);
		},
	});

	const onSubmitHandler = (event) => {
		event.preventDefault();
		if (nickname.trim() === "" && password.trim() === "") {
			alert("닉네임과 비밀번호를 입력해주세요.");
		} else if (!email) {
			alert("email을 입력해주세요.");
		} else if (!nickname) {
			alert("nickname을 입력해주세요.");
		} else if (!password) {
			alert("password를 입력해주세요.");
		} else if (password !== password2) {
			alert("비밀번호가 일치하지 않습니다.");
		} else {
			postSignUpMutaion.mutate(nickname, password, email);
		}
	};

	// const PostSingUp = useMutation(postSignUp, {
	// 	onsuccess: () => {
	// 		queryClient.invanicknameateQueries("posts");
	// 	},
	// 	onerror: () => {
	// 		// 에러 발생 시 실행될 로직
	// 	},
	// });

	// onClick={()=>PostSingUp.mutate(itemnickname)}

	// console.log(data);

	return (
		<StOotdGramContainer>
			<StSignLogo
				onClick={() => {
					navigate("/");
				}}
				src={signLogo}
				alt='로고'
			/>

			<StInputForm onSubmit={onSubmitHandler}>
				<StSignInput
					onChange={(e) => setNickname(e.target.value)}
					placeholder='Nick Name'
					value={nickname}
					type='text'
				/>
				<StSignInput
					placeholder='e-mail'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type='text'
				/>
				<StSignInput
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type='password'
				/>
				<StSignInput
					placeholder='Password double check'
					value={password2}
					onChange={(e) => setPassword2(e.target.value)}
					type='password'
				/>
				<StSignButton type='submit' $bgColor={"blue"}>
					Sign up
				</StSignButton>
			</StInputForm>
			<p style={{ color: "#dfdbdb" }}>――――――――　OR　――――――――</p>
			<StSignButton
				$bgColor={"gray"}
				onClick={() => {
					navigate("/signin");
				}}>
				Already have an account? &nbsp;{" "}
				<span
					style={{
						fontWeight: "700",
					}}>
					Sign in.
				</span>
			</StSignButton>
		</StOotdGramContainer>
	);
}

export default SignUp;
