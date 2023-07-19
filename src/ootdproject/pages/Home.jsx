import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { getBoard } from '../axios/boardApi';
import OotdCard from '../components/home/OotdCard';
import RightNavBar from '../components/home/RightNavBar';

function Home() {
	const stCardCenterRef = useRef();
	const [data, setData] = useState([]);

	//게시글 조회
	const fetchBoard = async () => {
		try {
			const data = await getBoard();
			console.log('게시글 조회 성공:', data);
			setData(data);
		} catch (error) {
			console.error('게시글 조회 실패:', error);
		}
	};
	useEffect(() => {
		fetchBoard();
	}, []);
	return (
		<StOotdContainer>
			<StCardCenter ref={stCardCenterRef}>
				{data.map(item => (
					<div key={item.id}>
						<OotdCard image={item.image} content={item.content} nickname={item.nickname} />
					</div>
				))}
			</StCardCenter>
			<RightNavBar stCardCenterRef={stCardCenterRef} />
		</StOotdContainer>
	);
}

export default Home;

const StOotdContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 60%;
	height: 100vh;
`;

const StCardCenter = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
	max-height: 100vh;
	align-items: center;
	overflow-y: auto;
	/* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
	&::-webkit-scrollbar {
		display: none;
	}
`;

// {
// id: 9,
// image: "https://ootdgram-bucket.s3.ap-northeast-2.amazonaws.com/post/524c0f69-a87c-43fc-827f-26c60ecfa740-277EDC3B576C7E9A1A.png",
// content: "게시글 9",
// createdAt: "2023-07-19T06:03:15.434741",
// modifiedAt: "2023-07-19T06:03:15.434741",
// commentList: [
// {
// id: 21,
// content: "댓글1",
// nickname: "1234567",
// createdAt: "2023-07-19T06:04:51.73729",
// modifiedAt: "2023-07-19T06:04:51.73729"
// }
// ],
// nickname: "1234567"
// },
