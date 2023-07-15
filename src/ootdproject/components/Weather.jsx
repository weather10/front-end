import React from 'react';
import { styled } from 'styled-components';
import humidity from '../icon/humidity.png';
import rainfall from '../icon/rainfall.png';
import sunny from '../icon/sunny.png';
import wind from '../icon/wind.png';
import '../styles/fonts/font.css';

function Weather() {
	return (
		<>
			<StWeatherContainer>
				<div>
					<StAddress>
						남양주시, <br /> 다산동
					</StAddress>
					<StToday>Tue, Jun 30</StToday>

					<StWeatherMainIcon>
						<StWeatherIcon src={sunny} alt="맑음" />
						<span>
							<StTemperature>19</StTemperature>
							<StWeatherText>Sunny</StWeatherText>
						</span>
					</StWeatherMainIcon>
					<StWeatherDetail>
						<StWeatherDetailText>
							<StWeatherDetailIcon src={rainfall} alt="rainfall" />
							<StDetailLabel>RainFall</StDetailLabel>
							<StDetailIndex>3cm</StDetailIndex>
						</StWeatherDetailText>
						<StWeatherDetailText>
							<StWeatherDetailIcon src={wind} alt="wind" />
							<StDetailLabel>Windy</StDetailLabel>
							<StDetailIndex>19km/h</StDetailIndex>
						</StWeatherDetailText>
						<StWeatherDetailText>
							<StWeatherDetailIcon src={humidity} alt="humidity" />
							<StDetailLabel>Humidity</StDetailLabel>
							<StDetailIndex>68%</StDetailIndex>
						</StWeatherDetailText>
						<StWeekBox>
							<StDayOfWeek>Sun</StDayOfWeek>
							<StDayOfWeek>Mon</StDayOfWeek>
							<StDayOfWeek>Tue</StDayOfWeek>
							<StDayOfWeek>Wed</StDayOfWeek>
							<StDayOfWeek>Thu</StDayOfWeek>
							<StDayOfWeek>Fri</StDayOfWeek>
							<StDayOfWeek>Sat</StDayOfWeek>
						</StWeekBox>
					</StWeatherDetail>
				</div>
			</StWeatherContainer>
		</>
	);
}

export default Weather;

const StWeatherContainer = styled.div`
	width: 40%;
	height: 100vh;
	background-color: rgba(72, 132, 238, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

// const StWeatherPlace = styled.div`
// 	/* background-color: white; */
// `;
const StAddress = styled.h1`
	font-family: 'GowunDodum-Regular';
`;

const StWeatherIcon = styled.img`
	width: 120px;
	height: 120px;
`;

const StToday = styled.p`
	color: gray;
	font-family: 'GowunDodum-Regular';
`;

const StTemperature = styled.div`
	font-size: 35pt;
	font-weight: 600;
	display: flex;
	align-items: center;
	justify-content: space-around;
	font-family: 'GowunDodum-Regular';
`;

const StWeatherText = styled.p`
	color: gray;
	font-family: 'GowunDodum-Regular';
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const StWeatherMainIcon = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 20px;
`;

const StWeatherDetail = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
const StWeatherDetailIcon = styled.img`
	width: 50px;
	height: 50px;
	margin-right: 10px;
`;

const StDetailLabel = styled.label`
	font-family: 'GowunDodum-Regular';
	font-size: 15pt;
	font-weight: 600;
	margin-right: 10px;
	border: 5px solid rgba(255, 255, 255, 0);
	background-color: rgba(255, 255, 255, 0.7);
	border-radius: 6px;
	width: 200px;
	display: flex;
`;

const StDetailIndex = styled.p`
	font-family: 'GowunDodum-Regular';
	font-size: 5pt;
	border: 5px solid rgba(255, 255, 255, 0);
	background-color: rgba(255, 255, 255, 0.7);
	border-radius: 6px;
`;
const StWeekBox = styled.div`
	gap: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StWeatherDetailText = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StDayOfWeek = styled.div`
	margin-top: 15px;
	display: flex;
	border: 5px solid rgba(255, 255, 255, 0);
	background-color: rgba(255, 255, 255, 0.7);
	border-radius: 6px;
	width: 50px;
	justify-content: space-between;
	height: 100px;
`;
