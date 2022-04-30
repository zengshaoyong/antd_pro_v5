// @ts-ignore

/* eslint-disable */
// import { request } from 'umi';
import request from '../request';

/**
 * 请求当前用户接口
 * @param {*} options
 * @returns
 */
export async function currentUser(options) {
  return request('http://127.0.0.1:5000/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

/**
 * 请求菜单接口
 * @param {*} options
 * @returns
 */
export async function menu(options) {
  return request('/api/menu', {
    method: 'GET',
    ...(options || {}),
  });
}

export async function testData(params, options) {
  return request('http://127.0.0.1:5000/', {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
}
/** 退出登录接口 POST /api/login/outLogin */

export async function outLogin(options) {
  return request('/api/login/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}
/** 登录接口 POST /api/login/account */

export async function login(body, options) {
  return request('http://127.0.0.1:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
/** 此处后端没有提供注释 GET /api/notices */

export async function getNotices(options) {
  return request('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}
/** 获取规则列表 GET /api/rule */

export async function rule(params, options) {
  return request('/api/rule', {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
}
/** 新建规则 PUT /api/rule */

export async function updateRule(options) {
  return request('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}
/** 新建规则 POST /api/rule */

export async function addRule(options) {
  return request('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}
/** 删除规则 DELETE /api/rule */

export async function removeRule(options) {
  return request('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
