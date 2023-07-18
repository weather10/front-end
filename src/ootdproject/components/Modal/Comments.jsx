import React, { useState } from "react";
import { styled } from "styled-components";

function Comments({ openComments }) {
	// const closeModalOne = () => {
	// 	setModalOne(false);
	// };

	return (
		<div>
			{openComments && (
				<>
					<StModalsFather>
						<StModalOneChild>
							닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
							<ButtonBox>
								<button>닫기</button>
								<button>확인</button>
							</ButtonBox>
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
	background-color: rgba(0, 0, 0, 0.8);
`;
const StModalOneChild = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	background-color: white;
	border-radius: 8px;
	width: 500px;
	height: 300px;
`;

const ButtonBox = styled.div`
	display: flex;
	position: relative;
	top: 20px;
	left: 100px;
	gap: 20px;
`;

const StModalTwoChild = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: baseline;
	width: 300px;
	height: 200px;
	border-radius: 8px;
	background-color: white;
`;

const Xbutton = styled.button`
	border: 1px solid rgb(221, 221, 221);
	width: 40px;
	height: 40px;
	border-radius: 100%;
	cursor: pointer;
	&:hover {
		border: 1px solid black;
	}
`;
