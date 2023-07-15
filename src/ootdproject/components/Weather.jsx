import React from "react";
import { styled } from "styled-components";

function Weather() {
	return <StWeatherContainer>나는 변하지 않는 날씨 요정입니다</StWeatherContainer>;
}

export default Weather;

const StWeatherContainer = styled.div`
	width: 40vh;
	height: 100vh;
`;
