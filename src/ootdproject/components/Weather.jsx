import React from 'react';
import { styled } from 'styled-components';
import sunny from '../icon/sunny.png';

function Weather() {
	return (
		<>
			<StWeatherContainer>
				<StWeatherPlace>
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
				</StWeatherPlace>
			</StWeatherContainer>
		</>
	);
}

export default Weather;

const StWeatherContainer = styled.div`
	width: 40%;
	height: 100vh;
	background-color: rgba(72, 132, 238, 0.2);
`;

const StWeatherPlace = styled.div`
	padding: 100px;
`;
const StAddress = styled.h1`
	@font-face {
		font-family: 'IBMPlexSansKR-Regular';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff')
			format('woff');
		font-weight: normal;
		font-style: normal;
	}
	font-family: 'IBMPlexSansKR-Regular';
`;

const StWeatherIcon = styled.img`
	width: 75px;
	height: 75px;
`;

const StToday = styled.p`
	color: gray;
`;

const StTemperature = styled.div`
	font-size: 35pt;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StWeatherText = styled.p`
	color: gray;
`;

const StWeatherMainIcon = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;
