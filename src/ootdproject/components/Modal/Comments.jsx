import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import yellowGirl from "../../icon/yellowGirl.jpg";
import { GrClose } from "react-icons/gr";
import Avatar from "../home/Avatar";
import basic from "../../icon/basicAvatar.png";
import { getComments } from "../../axios/comments";

//openComments는 OotdCard에 있는 댓글아이콘(버튼)을 클릭했을때 state의 변한 값임!
//toggleCommentsHandler는 Ootd에서 실행되는 함수인데 여기서 온클릭을 했을때 바깥에 있는 함수에까지 전달되도록 props를 받은것!
function Comments({ openComments, toggleCommentsHandler, id }) {
	const nickname = "eunji__2f";
	const textmsg = "ㄴㅇ럼니ㅏ어림나ㅓ림너리ㅏㅁㄴ어라ㅣㄴ머하ㅣㄴ멍ㅎ;멓ㄴ;함ㄴㅇㅎ";
	const dateTimeString = "2023-07-16T03:32:51.078944";
	const result = dateTimeString.replace(/T.*/, "");

	const [data, setData] = useState([]);

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

	const onSubmitHandler = (event) => {
		event.preventDefault(); //있으면 좋은건가용? - 폼태그 액션
	};

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
											<StTextBox>
												<StIdText>{item.nickname}</StIdText>
												<StDate>{item.createdAt}</StDate>
											</StTextBox>
											<StUserEditCancelBtnBox>
												<StUserBtn>수정</StUserBtn>
												<StUserBtn>삭제</StUserBtn>
											</StUserEditCancelBtnBox>
										</UserComment>
									))}
								</StGetCommentsBox>
								<StInputBox>
									<form>
										<StInput placeholder='댓글 달기...' />
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
