import axios from "axios";
//댓글 조회 GET
export const getComments = async (postId) => {
	try {
		const response = await axios.get(`${process.env.REACT_APP_SERVER}/api/post/${postId}/comments`);
		return response.data;
	} catch (error) {
		console.error("댓글 조회 실패:", error);
		return [];
	}
};
//댓글 작성 POST headers, content
export const postComments = async (postId, headers, payload) => {
	try {
		const response = await axios.post(`${process.env.REACT_APP_SERVER}/api/post/${postId}/comment`, payload, {
			headers,
		});
		console.log("댓글 작성완료", response);
		return response.data;
	} catch (error) {
		console.log("postComments axios error", error);
		return [];
	}
};
//댓글 삭제 DELETE.....
export const deleteComments = async (postId, commentId, headers) => {
	try {
		const response = await axios.delete(`${process.env.REACT_APP_SERVER}/api/post/${postId}/comment/${commentId}`, {
			headers,
		});
		console.log("댓글 삭제완료", response.data); // 성공

		return response.data;
	} catch (error) {
		console.log("deleteComments axios error", error);
	}
};

//댓글 수정 PATCH
export const patchComments = async (postId, commentId, headers, payload) => {
	try {
		const response = await axios.patch(
			`${process.env.REACT_APP_SERVER}/api/post/{postId}/comment/{commentId}`,
			payload
		);
		return response.data;
	} catch (error) {
		console.log("deleteComments axios error", error);
	}
};
