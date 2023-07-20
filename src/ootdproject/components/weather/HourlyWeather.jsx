import React, { useState } from "react";
import { styled } from "styled-components";

function HourlyWeather() {
	const slideCount = 4; // 슬라이드 개수
	const slideWidth = 430; // 한 개의 슬라이드 넓이
	const slideMargin = 140; // 슬라이드 간의 margin 값
	const [currentIdx, setCurrentIdx] = useState(0); // 현재 슬라이드 index

	function moveSlide(num) {
		setCurrentIdx(num);
	}

	function handlePrevClick() {
		if (currentIdx === 0) {
			// 현재 슬라이드가 0일 경우, 마지막 슬라이드로 이동
			moveSlide(slideCount - 1);
		} else {
			moveSlide(currentIdx - 1);
		}
		// if (currentIdx !== 0) {
		// 	moveSlide(currentIdx - 1);
		// }
	}

	function handleNextClick() {
		if (currentIdx !== slideCount - 1) {
			moveSlide(currentIdx + 1);
		}
	}

	const weatherList = ["1시", "2시", "3시", "4시", "5시"];

	return (
		<>
			<StSlideShow>
				<StSlides
					style={{
						width: `${(slideWidth + slideMargin) * slideCount}px`,
						left: `-${currentIdx * slideWidth}px`,
					}}>
					<FistChild>
						<ShowImg>
							{weatherList.map((item) => (
								<OneWeather>{item}</OneWeather>
							))}
						</ShowImg>
					</FistChild>
					<Stli>
						<ShowImg>
							{weatherList.map((item) => (
								<OneWeather>{item}</OneWeather>
							))}
						</ShowImg>
					</Stli>
					<Stli>
						<ShowImg>
							{weatherList.map((item) => (
								<OneWeather>{item}</OneWeather>
							))}
						</ShowImg>
					</Stli>
					<LastChild>
						<ShowImg>
							{weatherList.map((item) => (
								<OneWeather>{item}</OneWeather>
							))}
						</ShowImg>
					</LastChild>
				</StSlides>
				<p>
					{/* <!-- &lang: 왼쪽 방향 화살표
      &rang: 오른쪽 방향 화살표 --> */}
					{/* <StSpan class='prev' onClick={handlePrevClick}>
						&lang;
					</StSpan> */}
					<StSpan onClick={handleNextClick}>&rang;</StSpan>
				</p>
			</StSlideShow>
		</>
	);
}

export default HourlyWeather;

const StSlideShow = styled.div`
	box-sizing: border-box;
	gap: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 5px solid rgba(255, 255, 255, 0);
	background-color: rgba(255, 255, 255, 0.7);
	border-radius: 30px;
	width: 500px;
	height: 250px;
	margin: 50px auto;
	overflow: hidden;
	position: relative;
`;

const StSlides = styled.ul`
	position: absolute;
	left: 0;
	top: 0;
	transition: left 0.5s ease-out;
`;

const FistChild = styled.li`
	list-style-type: none;
	/* 첫번째만 가운데 정렬을 위해 left에 margin */
	margin-left: 0px;
	float: left;
	margin-right: 200px;
`;

const Stli = styled.li`
	list-style-type: none;
	float: left;
	margin-right: 100px;
`;

const LastChild = styled.li`
	list-style-type: none;
	float: left;
`;

const ShowImg = styled.div`
	display: flex;
	background-color: blue;
	width: 500px;
	height: 200px;
`;

const StSpan = styled.span`
	position: absolute;
	background-color: transparent;
	color: black;
	text-align: center;
	border-radius: 50%;
	padding: 10px 20px;
	top: 100px;
	right: 0px;
	font-size: 1.3em;
	cursor: pointer;
`;

const OneWeather = styled.div`
	width: 100px;
	height: 100px;
`;
