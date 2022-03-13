import { extend } from 'umi-request';
/** 获取当前的用户 GET /api/currentUser */

const request = extend({});

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
