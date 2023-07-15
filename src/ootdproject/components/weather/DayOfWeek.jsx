import React from 'react';
import { styled } from 'styled-components';

function DayOfWeek() {
	const dayList = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

	return (
		<div>
			<StWeekBox>
				{dayList.map(item => {
					return <StDayOfWeek>{item}</StDayOfWeek>;
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
	border-radius: 6px;
	width: 20px;
	height: 100px;
`;
