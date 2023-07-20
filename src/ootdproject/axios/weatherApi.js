import axios from "axios";
// 날씨 조회 GET

export const getWeather = async (latitude, longitude) => {
	try {
		const response = await axios.get(`${process.env.REACT_APP_SERVER}/api/weather/${latitude}/${longitude}`);
		console.log("날씨 조회 data", response.data);
		return response.data;
	} catch (error) {
		console.error("날씨조회에러", error);
		throw error;
	}
};

// {
//     "currentTemperature": 30.62,
//     "weatherStatus": "Clouds",
//     "humidity": 70.0,
//     "windSpeed": 0.79,
//     "address": "대구광역시 달서구 떙떙동 1106",
//     "precipitation": 0.0,
//     "dateTime": "2023-07-19T14:04:04",
//     "forecastWeatherList": [
//       {
//         "temp": 30.72,
//         "weatherStatus": "Rain",
//         "dateTime": "2023-07-19T15:00:00"
//       },
//     {
//       "temp": 30.72,
//       "weatherStatus": "Rain",
//       "dateTime": "2023-07-19T18:00:00"
//     },
//     …
//     ]
//   }
