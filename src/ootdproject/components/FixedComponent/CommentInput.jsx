import React, { useState } from "react";
import { styled } from "styled-components";
import { patchComments } from "../../axios/commentsApi";
import Avatar from "../home/Avatar";

export default function CommentInput({ postId, data, item, index, setData, openUpdateHandler }) {
	const [Text, setText] = useState(item.content);

	const updateText = (event) => {
		setText(event.target.value);
	};

	const updateComments = async (event) => {
		try {
			const headers = {
				Accept: "*/*",
				"Content-Type": "application/json",
			};

			const payload = {
				content: Text,
			};

			const response = await patchComments(postId, item.id, headers, payload);
			console.log("수정성공", response);
			data[index].isOpen = false;
			setData([...data]);
		} catch (error) {
			alert("본인 댓글만 수정 가능합니다.");
			data[index].isOpen = false;
			setData([...data]);
			console.error("댓글 수정 실패:", error);
		}
	};
	console.log("item.userImage", item.userImage);
	console.log("item.nickname", item.nickname);

	const removeComments = (event) => {};
	return (
		<>
			<Avatar image={item.userImage} type='homeAvatar' />
			{item.isOpen ? (
				<StTextBox>
					<StIdText>{item.nickname}</StIdText>
					<input autoFocus type='text' onChange={updateText} value={Text} />
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
				{item.isOpen ? (
					<StUserBtn onClick={(e) => updateComments(e, item.id, index)}>완료</StUserBtn>
				) : (
					<StUserBtn onClick={(e) => openUpdateHandler(e, index)}>수정</StUserBtn>
				)}
				<StUserBtn onClick={(e) => removeComments(e, item.id)}>삭제</StUserBtn>
			</StUserEditCancelBtnBox>
		</>
	);
}

const Update = styled.input``;

//여기서부터 map 돌려서 반복해야하는 댓글1개당 styled-components

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
