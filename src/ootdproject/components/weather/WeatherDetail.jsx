import Avatar from '@mui/material/Avatar';
import React from 'react';
import { styled } from 'styled-components';

function WeatherDetail({ icon, weatherText, index }) {
	return (
		<div>
			<StWeatherDetailText>
				<Avatar>
					<StWeatherDetailIcon src={icon} alt={icon} />
				</Avatar>
				<StTextBox>
					<StDetailLabel>{weatherText}</StDetailLabel>
					<StDetailIndex>{index}</StDetailIndex>
				</StTextBox>
			</StWeatherDetailText>
		</div>
	);
}

export default WeatherDetail;

// const StWeatherDetail = styled.div`
// 	margin-top: 50px;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-around;
// `;

const StWeatherDetailText = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 300px;
`;

const StWeatherDetailIcon = styled.img`
	width: 65px;
	height: 65px;
	background-color: white;
`;

const StTextBox = styled.div`
	display: flex;
	align-items: center;
	border: 5px solid rgba(255, 255, 255, 0);
	border-radius: 6px;
	background-color: rgba(255, 255, 255, 0.7);
`;

const StDetailLabel = styled.label`
	font-family: 'GowunDodum-Regular';
	font-size: 15pt;
	font-weight: 600;
	width: 200px;
`;

const StDetailIndex = styled.p`
	font-family: 'GowunDodum-Regular';
	font-size: 5px;
`;
