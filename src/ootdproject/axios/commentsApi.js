import axios from "axios";

function getCookie(cookieName) {
	var cookieValue = null;
	if (document.cookie) {
		var array = document.cookie.split(escape(cookieName) + "=");
		if (array.length >= 2) {
			var arraySub = array[1].split(";");
			cookieValue = unescape(arraySub[0]);
		}
	}
	return cookieValue;
}

function addTokenHeader(headers) {
	let str = getCookie("accessToken");
	if (str == null) alert("로그인이 필요합니다.");
	headers.Authorization = str;
	return headers;
}

//댓글 조회 GET
export const getComments = async (postId) => {
	try {
		const response = await axios.get(`${process.env.REACT_APP_SERVER}/api/post/${postId}/comments`);
		return response.data;
	} catch (error) {
		console.error("댓글 조회 실패:", error);
	}
};
//댓글 작성 POST
export const postComments = async (postId, headers, payload) => {
	try {
		const response = await axios.post(`${process.env.REACT_APP_SERVER}/api/post/${postId}/comment`, payload, {
			headers: headers,
		});
		console.log("댓글 작성완료", response);
		return response.data;
	} catch (error) {
		console.log("postComments axios error", error);
	}
};
//댓글 삭제 DELETE
export const deleteComments = async (postId, commentId, headers) => {
	try {
		headers = addTokenHeader(headers);
		const response = await axios.delete(`${process.env.REACT_APP_SERVER}/api/post/${postId}/comment/${commentId}`, {
			headers: headers,
		});
		console.log("댓글 삭제완료", response.data);

		return response.data;
	} catch (error) {
		console.log("deleteComments axios error", error);
		throw error;
	}
};

//댓글 수정 PATCH
export const patchComments = async (postId, commentId, headers, payload) => {
	try {
		headers = addTokenHeader(headers);
		const response = await axios.patch(
			`${process.env.REACT_APP_SERVER}/api/post/${postId}/comment/${commentId}`,
			payload,
			{
				headers: headers,
			}
		);
		return response.data;
	} catch (error) {
		console.log("patchComments axios error", error);
		throw error;
	}
};
