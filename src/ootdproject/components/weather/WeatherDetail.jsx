import Avatar from "@mui/material/Avatar";
import React from "react";
import { styled } from "styled-components";

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

const StWeatherDetailText = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 500px;
	flex-direction: row-reverse;
`;

const StWeatherDetailIcon = styled.img`
	width: 65px;
	height: 65px;
	background-color: white;
`;

const StTextBox = styled.div`
	display: flex;
	align-items: center;
	box-sizing: border-box;
	width: 190px;
	border: 5px solid rgba(255, 255, 255, 0);
	border-radius: 6px;
`;

const StDetailLabel = styled.label`
	font-family: "GowunDodum-Regular";
	font-size: 13pt;
	font-weight: 600;
`;

const StDetailIndex = styled.p`
	font-family: "GowunDodum-Regular";
	font-size: 10pt;
	padding-left: 100px;
`;
