import { extend } from 'umi-request';

// const errorHandler = (error) => {
//   const { response } = error;
//   // console.log(response)

//   if (response && response.status) {
//     const errorText = codeMessage[response.status] || response.statusText;
//     const { status, url } = response;
//     notification.error({
//       message: `请求错误 ${status}`,
//       description: errorText,
//     });
//   } else if (!response) {
//     notification.error({
//       description: '您的网络发生异常，无法连接服务器',
//       message: '网络异常',
//     });
//   }

//   return response;
// };

const request = extend({
  // errorHandler,
  // 默认错误处理
  credentials: 'include',
});

request.interceptors.response.use((response, options) => {
  // console.log(response);
  return response;
});

request.interceptors.response.use(async (response) => {
  const data = await response.clone().json();
  // console.log(data);
  return response;
});

export default request;
