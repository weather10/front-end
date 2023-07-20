import React, { useEffect } from "react";
import { styled } from "styled-components";
import humidity from "../../icon/humidity.png";
import rainfall from "../../icon/rainfall.png";
import sunny from "../../icon/sunny.png";
import wind from "../../icon/wind.png";
import "../../styles/fonts/font.css";
import WeatherDetail from "./WeatherDetail";

function Weather() {
	return (
		<>
			<StWeatherContainer>
				<StAddress>
					남양주시, <br /> 다산동
				</StAddress>
				<StToday>Tue, Jun 30</StToday>
				<StWeatherMain>
					<StWeatherIcon src={sunny} alt='맑음' />
					<div>
						<StTemperature>19°C</StTemperature>
						<StWeatherText>Sunny</StWeatherText>
					</div>
				</StWeatherMain>
				<StWeatherDetailBox>
					<WeatherDetail icon={rainfall} weatherText='강수' index='2cm' />
					<WeatherDetail icon={wind} weatherText='풍속' index='19km/h' />
					<WeatherDetail icon={humidity} weatherText='습도' index='68cm' />
				</StWeatherDetailBox>
			</StWeatherContainer>
		</>
	);
}

export default Weather;

const StWeatherContainer = styled.div`
	position: sticky;
	width: 40%;
	height: 100vh;
	background-color: rgba(155, 60, 168, 0.2);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const StAddress = styled.p`
	font-family: "GowunDodum-Regular";
	font-size: 65px;
	margin: 0;
	padding-right: 80px;
`;

const StToday = styled.p`
	color: gray;
	font-family: "GowunDodum-Regular";
	padding-right: 240px;
`;

const StWeatherMain = styled.div`
	display: flex;
	align-items: center;
	gap: 130px;
	padding-right: 40px;
`;

const StWeatherIcon = styled.img`
	width: 120px;
	height: 120px;
`;

const StTemperature = styled.div`
	font-size: 35pt;
	font-weight: 600;
	font-family: "GowunDodum-Regular";
`;

const StWeatherText = styled.p`
	color: gray;
	font-family: "GowunDodum-Regular";
`;

const StWeatherDetailBox = styled.div`
	padding-top: 30px;
`;
