import axios from "axios";
//댓글 조회 GET
export const getComments = async (postId) => {
	try {
		const response = await axios.get(`${process.env.REACT_APP_SERVER}/api/post/${postId}/comments`);
		return response.data;
	} catch (error) {
		console.log("getComments axios error", error);
	}
};
//댓글 작성 POST
export const postComments = async (payload) => {
	try {
		const response = await axios.post(`${process.env.REACT_APP_SERVER}/api/post/{postId}/comment`, payload);
		console.log(response);
		return response.data;
	} catch (error) {
		console.log("postComments axios error", error);
	}
};
//댓글 삭제 DELETE
export const deleteComments = async (payload) => {
	try {
		const response = await axios.delete(
			`${process.env.REACT_APP_SERVER}/api/post/{postId}/comment/{commentId}`,
			payload
		);
		return response.data;
	} catch (error) {
		console.log("deleteComments axios error", error);
	}
};
