import React from "react";
import { styled } from "styled-components";

function DayOfWeek() {
	const dayList = ["오늘", "내일", "모레"];

	return (
		<div>
			<StWeekBox>
				{dayList.map((item, index) => {
					return <StDayOfWeek key={index}>{item}</StDayOfWeek>;
				})}
			</StWeekBox>
		</div>
	);
}

export default DayOfWeek;

const StWeekBox = styled.div`
	gap: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StDayOfWeek = styled.div`
	margin-top: 30px;
	border: 5px solid rgba(255, 255, 255, 0);
	background-color: rgba(255, 255, 255, 0.7);
	border-radius: 30px;
	width: 100px;
	height: 100px;
`;
