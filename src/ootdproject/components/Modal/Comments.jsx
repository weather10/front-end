import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import yellowGirl from "../../icon/yellowGirl.jpg";
import { GrClose } from "react-icons/gr";
import Avatar from "../home/Avatar";
import basic from "../../icon/basicAvatar.png";
import { getComments, postComments, deleteComments, patchComments } from "../../axios/commentsApi";

//openComments는 OotdCard에 있는 댓글아이콘(버튼)을 클릭했을때 state의 변한 값임!
//toggleCommentsHandler는 Ootd에서 실행되는 함수인데 여기서 온클릭을 했을때 바깥에 있는 함수에까지 전달되도록 props를 받은것!
function Comments({ openComments, toggleCommentsHandler, id }) {
	// const result = dateTimeString.replace(/T.*/, "");

	//댓글조회 data
	const [data, setData] = useState([]);

	//댓글 조회 GET Api
	const fetchComments = async () => {
		try {
			const data = await getComments(id);
			console.log("댓글 조회 성공:", data);
			setData(data);
		} catch (error) {
			console.error("댓글 조회 실패:", error);
		}
	};
	useEffect(() => {
		fetchComments();
	}, []);

	const [content, setContent] = useState("");

	const AddCommentsHandler = (e) => {
		setContent(e.target.value);
	};

	//댓글 등록 POST Api
	const addComments = async () => {
		try {
			const token = document.cookie.replace(/(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
			const headers = {
				Accept: "*/*",
				Authorization: `${token}`,
				"Content-Type": "application/json",
			};

			const payload = {
				content,
			};
			const response = await postComments(id, headers, payload);
			console.log("comment resData", response);
		} catch (error) {
			console.error("댓글 등록 실패:", error);
		}
	};

	//댓글 삭제 DELETE api
	const removeComments = async () => {
		try {
			const token = document.cookie.replace(/(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
			const headers = {
				Accept: "*/*",
				Authorization: `${token}`,
				"Content-Type": "application/json",
			};

			const response = await deleteComments(id, headers);
			console.log("comment resData", response);
		} catch (error) {
			console.error("댓글 등록 실패:", error);
		}
	};

	const onSubmitHandler = (event) => {
		event.preventDefault(); //있으면 좋은건가용? - 폼태그 액션
		addComments();

		document.location.reload(true);
	};

	//댓글 수정상태 true
	const [isOpen, setIsOpen] = useState(false);

	const openUpdateHandler = () => {
		setIsOpen(!isOpen);
	};

	const onChangeUpdate = () => {};

	//댓글 수정 PATCH api
	const updateComments = async () => {
		try {
			const token = document.cookie.replace(/(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
			const headers = {
				Accept: "*/*",
				Authorization: `${token}`,
				"Content-Type": "application/json",
			};

			const response = await patchComments(id, headers);
			console.log("수정성공", response);
		} catch (error) {
			console.error("댓글 수정 실패:", error);
		}

		return (
			<div>
				{openComments && (
					<>
						<StModalsFather>
							<StModalOneChild>
								<StImgBox>
									<StImg src={yellowGirl} />
								</StImgBox>
								<StCommentsBox>
									<StButtonBox>
										<GrClose onClick={toggleCommentsHandler} />
									</StButtonBox>
									<StGetCommentsBox>
										{data.map((item) => (
											<UserComment>
												<Avatar image={item.userImage} type='homeAvatar' />
												{isOpen ? (
													<StTextBox>
														<StIdText>
															{item.nickname}
															<Update
																type='text'
																onChange={onChangeUpdate}
																defaultValue={item.content}
															/>
														</StIdText>
														<StDate>{item.createdAt}</StDate>
													</StTextBox>
												) : (
													<StTextBox>
														<StIdText>
															{item.nickname}
															{item.content}
														</StIdText>
														<StDate>{item.createdAt}</StDate>
													</StTextBox>
												)}
												<StUserEditCancelBtnBox>
													{isOpen ? (
														<StUserBtn onClick={updateComments}>완료</StUserBtn>
													) : (
														<StUserBtn onClick={openUpdateHandler}>수정</StUserBtn>
													)}
													<StUserBtn onClick={removeComments}>삭제</StUserBtn>
												</StUserEditCancelBtnBox>
											</UserComment>
										))}
									</StGetCommentsBox>
									<StInputBox>
										<form onSubmit={AddCommentsHandler}>
											<StInput
												placeholder='댓글 달기...'
												value={content}
												onChange={AddCommentsHandler}
											/>
											<StAddComments onClick={onSubmitHandler}>게시</StAddComments>
										</form>
									</StInputBox>
								</StCommentsBox>
							</StModalOneChild>
						</StModalsFather>
					</>
				)}
			</div>
		);
	};
}
export default Comments;

const StModalsFather = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
`;

const StModalOneChild = styled.div`
	display: flex;
	background-color: #ffffff;
	width: 900px;
	height: 700px;
`;

const StImgBox = styled.div`
	width: 450px;
	height: 700px;
`;

const StImg = styled.img`
	width: 450px;
	height: 700px;
`;

const StCommentsBox = styled.div`
	position: relative;
	width: 450px;
	height: 700px;
`;

const StButtonBox = styled.button`
	overflow: hidden;
	position: absolute;
	top: 20px;
	right: 20px;
	border: none;
	background-color: white;
	cursor: pointer;
	&:hover {
		transform: scale(1.6);
	}
`;

const StGetCommentsBox = styled.div`
	position: absolute;
	width: 450px;
	height: 585px;
	top: 50px;
	border-top: 1px solid #b4b0b0;
	border-bottom: 1px solid #b4b0b0;
`;

const StInputBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-left: 15px;
	position: absolute;
	bottom: 0px;
	width: 440px;
	height: 65px;
`;

const StInput = styled.input`
	width: 380px;
	height: 35px;
	border: none;
	outline: none;
`;

const StAddComments = styled.button`
	cursor: pointer;
	border: none;
	background-color: transparent;
	&:hover {
		transform: scale(1.1);
		color: rgb(89, 60, 60);
		font-weight: 650;
	}
	font-weight: 550;
`;

//여기서부터 map 돌려서 반복해야하는 댓글1개당 styled-components
const UserComment = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 445px;
	padding: 6px 2px 6px 6px;
	height: auto;
	overflow: hidden;
`;

const StTextBox = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10px;
`;

const StIdText = styled.div`
	font-size: medium;
`;

const StDate = styled.div`
	font-size: small;
`;

const StUserEditCancelBtnBox = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 20px;
`;

const StUserBtn = styled.button`
	width: 40px;
	height: 23px;
	cursor: pointer;
	border: none;
	/* border: 1px solid rgb(89, 60, 60);
	border-radius: 8px; */
	background-color: transparent;
	&:hover {
		transform: scale(1.1);
		color: rgb(89, 60, 60);
		font-weight: 650;
	}
	font-weight: 550;
`;

const Update = styled.input``;
