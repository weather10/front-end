import React from 'react';
import { styled } from 'styled-components';
import Avartar from '../components/Avartar';
import image from '../icon/basicAvatar.png';
import comment from '../icon/comment.png';
import heart from '../icon/heart.png';
import mainImg from '../icon/mainImg.png';
import rainy from '../icon/rainy.png';

function OotdCard() {
	return (
		<StOotdCardContainer>
			<StCardHead>
				<Avartar image={image} type="homeAvatar" />
				이름
				<StWeatherIcon src={rainy} alt="ootd-weather-icon" />
			</StCardHead>
			<div className="card-img">
				<StMainOotdImg src={mainImg} alt="userImage" />
			</div>
			<div className="like-comments-icon">
				<StLike src={heart} />
				<span>Liked by let</span>
				<StComment src={comment} />
			</div>
			<div>
				UserId ✨ Award-winning ProduMicka Touillaud Design 🚀 I share my best practices and design resources ✍🏻
				Follow to see how I'm building this page #ui #ux #productdesignct Designer
			</div>
		</StOotdCardContainer>
	);
}

export default OotdCard;

const StOotdCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 400px;
	height: 400px;
	background-color: white;
`;

const StCardHead = styled.div`
	display: flex;
	align-items: center;
	width: 340px;
	height: 330px;
`;

const StWeatherIcon = styled.img`
	width: 50px;
	height: 50px;
`;

const StMainOotdImg = styled.img`
	width: 327px;
	height: 311px;
`;

const StLike = styled.img`
	width: 30px;
	height: 30px;
`;

const StComment = styled.img`
	width: 30px;
	height: 30px;
`;
