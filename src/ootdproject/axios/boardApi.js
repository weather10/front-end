import axios from "axios";

// 게시글 조회
export const getBoard = async () => {
	try {
		const response = await axios.get(`${process.env.REACT_APP_SERVER}/api/posts`);
		console.log("게시글 조회 data", response.data);
		return response.data;
	} catch (error) {
		console.error("게시글조회에러", error);
		throw error;
	}
};

// 게시글 작성하기 POST
export const postBoard = async (data, headers) => {
	try {
		const response = await axios.post(`${process.env.REACT_APP_SERVER}/api/post`, data, { headers });
		console.log("게시글 작성완료", response.data); // 성공
		return response.data;
	} catch (error) {
		console.error("게시글 작성하기 에러", error);
		throw error;
	}
};

// 게시글 좋아요 POST
export const postLike = async (payload) => {
	try {
		const response = await axios.post(`${process.env.REACT_APP_SERVER}/api/post/{postId}/like`, payload);
		return response.data;
	} catch (error) {
		throw error;
	}
};

// 게시글 좋아요 취소 PUT
export const putLikeCancel = async (payload) => {
	try {
		const response = await axios.put(`${process.env.REACT_APP_SERVER}/api/post/{postId}/like`, payload);
		return response.data;
	} catch (error) {
		throw error;
	}
};
