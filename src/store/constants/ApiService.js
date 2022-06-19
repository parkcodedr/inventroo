import axios from 'axios';
const BASE_URL = "https://app.inventroo.com/inventroo_backend/api";

export const ApiService = axios.create(
    {
        baseURL: BASE_URL,
        headers: {
            'contentType': 'application/json',
            //'Authorization': `Bearer ${token}`
        }
    }
)

// export const setAuthToken = () => {
//     const token = getToken('x-token');
//     console.log(token);
//     if (token) {
//         ApiService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     } else {

//         delete ApiService.defaults.headers.common['Authorization'];
//     }
// }

// ApiService.interceptors.response.use(
//     (res) => {
//       return res;
//     },
//     async (err) => {
//       const originalConfig = err.config;
//       if (err.response) {
//         // Access Token was expired
//         if (err.response.status === 500 && !originalConfig._retry) {
//             console.log(err.response.status);
//           originalConfig._retry = true;
//           try {
//             const rs = await ApiService.get('/account/refreshToken');
//             const { access_token } = rs.data;
//             localStorage.setItem("x-token", access_token);
//             ApiService.defaults.headers.common["Bearer"] = access_token;
//             return ApiService(originalConfig);
//           } catch (_error) {
//             if (_error.response && _error.response.data) {
//               return Promise.reject(_error.response.data);
//             }
//             return Promise.reject(_error);
//           }
//         }
//         if (err.response.status === 403 && err.response.data) {
//           return Promise.reject(err.response.data);
//         }
//       }
//       return Promise.reject(err);
//     }
//   );