import axios from "axios";

// export const instance = axios.create({
// 	baseURL: "http://ec2-54-180-120-109.ap-northeast-2.compute.amazonaws.com",
// });

const headers = {
	Accept: "*/*", // 돌려받는 거 전부 받을 수 있게
	authorization: "", // 엑세스 토큰 넣는 곳
	"Content-Type": "application/json", // 객체 보낼 때는 application/json
	// "Content-Type": "multipart/form-data", // FormData는 이걸로
	// 헤더에 넣는 방법은 헤더 키값 : 벨류값
	// headerName : headerValue
};

// 회원가입 POST

export const postSignUp = async (payload) => {
	try {
		const response = await axios.post(`${process.env.REACT_APP_SERVER}/api/auth/signup`, payload);
		return response.data;
	} catch (error) {
		console.log("api쪽로직 error", error);
	}
};

// 로그인 POST

export const postSignIn = async (payload) => {
	try {
		const response = await axios.post(`${process.env.REACT_APP_SERVER}/api/auth/login`, payload);
		console.log(response);
		document.cookie = `accessToken=${response.headers.authorization}; path=/;`;
		return response.data; // 로그인 성공 시 서버에서 반환한 데이터를 클라이언트에 반환
	} catch (error) {
		throw error; // 로그인 실패 시 에러를 던짐
	}
};

// setErrorMsg(error.response.data.message);
// console.log(res);
//토큰을 꺼내서 쿠키에 저장한다!!!!!!!!!알겠냐~~~~~!!!!어린양들아~~~~!!!!!!!ㅋㅋㅋㅋㅋ
// document.cookie = `accessToken=${res.headers.accesstoken}; path=/`;

// // ------------
// // 추가
// const addTodos = async newTodo => {
// 	await axios.post(`${process.env.REACT_APP_SERVER}/todos`, newTodo);
// };

// // 삭제
// const deleteTodos = async id => {
// 	await axios.delete(`${process.env.REACT_APP_SERVER}/todos/${id}`);
// };

// // 수정
// const modifyTodos = async data => {
// 	const { id, ...updatedData } = data;
// 	await axios.put(`${process.env.REACT_APP_SERVER}/todos/${id}`, updatedData);
// };

// export { addTodos, deleteTodos, getPosts, modifyTodos };

// const instance = axios.create({
// 	baseURL: 'http://localhost:4000',
// });

// axios.get(url[('http://localhost:4000', config)]); // GET

// instance.interceptors.request.use(
// 	function (config) {
// 		// 요청을 보내기 전 수행
// 		console.log('인터셉트 요청 성공!');
// 		return config;
// 	},
// 	function (error) {
// 		// 오류 요청을 보내기 전 수행
// 		console.log('인터셉트 요청 오류!');
// 		return Promise.reject(error);
// 	},
// );

// instance.interceptors.response.use(
// 	function (response) {
// 		console.log('인터넵트 응답 받았어요!');
// 		// 정상 응답
// 		return response;
// 	},

// 	function (error) {
// 		console.log('인터셉트 응답 못받았어요...ㅠㅠ');
// 		return Promise.reject(error);
// 	},
// );
