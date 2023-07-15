import React from 'react';
import { styled } from 'styled-components';
import humidity from '../../icon/humidity.png';
import rainfall from '../../icon/rainfall.png';
import sunny from '../../icon/sunny.png';
import wind from '../../icon/wind.png';
import '../../styles/fonts/font.css';
import WeatherDetail from './WeatherDetail';
import DayOfWeek from './DayOfWeek';

function Weather() {
	return (
		<>
			<StWeatherContainer>
				<StAddress>
					남양주시, <br /> 다산동
				</StAddress>
				<StToday>Tue, Jun 30</StToday>
				<StWeatherMainIcon>
					<StWeatherIcon src={sunny} alt="맑음" />
					<StTemperature>19</StTemperature>
					<StWeatherText>Sunny</StWeatherText>
				</StWeatherMainIcon>

				<WeatherDetail icon={rainfall} weatherText="Rainfall" index="2cm" />

				<WeatherDetail icon={wind} weatherText="Windy" index="19km/h" />

				<WeatherDetail icon={humidity} weatherText="Humidity" index="68cm" />

				<DayOfWeek />
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

const StAddress = styled.h1`
	font-family: 'GowunDodum-Regular';
`;

const StToday = styled.p`
	color: gray;
	font-family: 'GowunDodum-Regular';
`;

const StWeatherMainIcon = styled.div`
	display: flex;
	/* justify-content: space-around; */
	align-items: center;
	gap: 10px;
`;

const StWeatherIcon = styled.img`
	width: 120px;
	height: 120px;
`;

const StTemperature = styled.div`
	font-size: 35pt;
	font-weight: 600;
	font-family: 'GowunDodum-Regular';
`;

const StWeatherText = styled.p`
	color: gray;
	font-family: 'GowunDodum-Regular';
`;
