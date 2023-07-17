import axios from 'axios';

// 게시글 조회
const getPosts = async () => {
	const response = await axios.get(`${process.env.REACT_APP_SERVER}/api/posts`);
	console.log('data', response.data);
	return response.data;
};

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

export { getPosts };
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
