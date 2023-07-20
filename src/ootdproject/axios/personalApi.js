// FormData
// {
//   ”image” : “image”,
//   ”data” :  {
//     “nickname” : “nickname”
//   }
// }

import axios from 'axios';

// 회원정보 이미지 전송하기 post
export const postPersonalData = async (formData, headers) => {
	try {
		const response = await axios.patch(`${process.env.REACT_APP_SERVER}/api/auth/update`, formData, { headers });
		console.log('회원정보 api 성공', response.data);
		return response.data;
	} catch (error) {
		console.error('회원정보 api 에러', error);
		throw error;
	}
};
