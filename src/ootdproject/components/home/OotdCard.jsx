import React, { useState } from 'react';
import { styled } from 'styled-components';
import image from '../../icon/basicAvatar.png';
import comment from '../../icon/comment.png';
import example from '../../icon/example.jpg';
import rainy from '../../icon/rainy.png';
import Avatar from './Avatar';
import LikeButton from './LikeButton';

function OotdCard() {
	const [like, setLike] = useState(false);
	const [moreContents, setMoreContents] = useState(true);

	const moreViewHandler = () => {
		setMoreContents(pre => !pre);
	};

	// useEffect(async () => {
	// 	const fetchData = async () => {
	// 		const res = await axios.get("http://localhost:4000/liked");
	// 		if (res.data.type === "liked") setLike(true);
	// 	};
	// 	fetchData();
	// }, []);

	// const toggleLike = async e => {
	// 	const res = await axios.post('http://localhost:4000/liked'); // [POST] 사용자가 좋아요를 누름 -> DB 갱신
	// 	res.then();
	// 	setLike(!like);
	// };
	const toggleLike = () => {
		setLike(!like);
	};

	return (
		<StOotdCardContainer>
			<StCardHead>
				<div
					style={{
						marginLeft: '-30px',
						marginRight: '260px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						gap: '10px',
					}}
				>
					<Avatar image={image} type="homeAvatar" />
					<div
						style={{
							width: '50px',
						}}
					>
						userid
					</div>
				</div>
				<WeatherIcon src={rainy} alt="ootd-weather-icon" />
			</StCardHead>
			<div className="card-img">
				<MainOotdImg src={example} alt="userImage" />
			</div>
			<div className="like-comments-icon-container" style={{ display: 'flex', width: '340px', marginTop: 'px' }}>
				<div
					style={{
						marginLeft: '-40px',
						marginRight: '260px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<LikeButton src={like} onClick={toggleLike} />
					<div
						style={{
							width: '50px',
							whiteSpace: 'nowrap',
						}}
					>
						Liked by 'Like Count'
					</div>
				</div>
				<button
					style={{
						width: '50px',
						border: 'none',
						backgroundColor: 'white',
						cursor: 'pointer',
					}}
				>
					<StComment src={comment} alt="댓글" />
				</button>
			</div>
			{moreContents && (
				<div
					className="ellipsis"
					style={{
						width: '400px',
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
					}}
				>
					UserId ✨ Award-winning ProduMicka Touillaud Design 🚀 I share my best practices and design
					resources ✍🏻 Follow to see how I'm building this page #ui #ux #productdesignct Designer
				</div>
			)}
			{!moreContents && (
				<div
					className="ellipsis"
					style={{
						width: '400px',
					}}
				>
					UserId ✨ Award-winning ProduMicka Touillaud Design 🚀 I share my best practices and design
					resources ✍🏻 Follow to see how I'm building this page #ui #ux #productdesignct Designer
				</div>
			)}
			<StMoreDetailBtn onClick={moreViewHandler}>더보기</StMoreDetailBtn>
		</StOotdCardContainer>
	);
}

export default OotdCard;

const StOotdCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 50px;
	width: 400px;
	height: 100%;
	border-bottom: 1px solid black;
`;

const StCardHead = styled.div`
	display: flex;
	width: 340px;
	height: 50px;
`;

const WeatherIcon = styled.img`
	width: 50px;
	height: 50px;
	background-color: transparent;
`;

const MainOotdImg = styled.img`
	width: 100%;
	height: 380px;
`;

const StLike = styled.img`
	width: 30px;
	height: 30px;
	background-color: transparent;
`;

const StComment = styled.img`
	width: 30px;
	height: 30px;
	background-color: transparent;
`;

const StMoreDetailBtn = styled.button`
	display: flex;
	border: none;
	background-color: transparent;
	cursor: pointer;
	width: 410px;
`;
