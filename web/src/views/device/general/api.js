//import request from './mock.js' //示例当中用的是模拟数据
import { request } from '@/api/service' //改成这个请求真实后端
export function GetList (query) {
  /* return request({
    url: '/test/page',
    method: 'get',
    params: query
  }) */
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 2000,
        msg: 'success',
        data: {
          total: 99,
          current: query.current,
          size: 20,
          data: [
            {createDate: '2016-05-02',status: '0', province: 'sz'},
            {createDate: '2016-05-04',status: '1',province: 'sh,sz'},
            {createDate: 2232433534511,status: '1', province: 'gz'},  //支持各种时间类型
            {createDate: '2016-05-03',status: '2',province: 'wh,gz'}
          ]
        }
      })
    })
  })
}
export function AddObj (obj) {
  return request({
    url: '/test/add',
    method: 'post',
    data: obj
  })
}
export function UpdateObj (obj) {
  return request({
    url: '/test/update',
    method: 'post',
    data: obj
  })
}
export function DelObj (id) {
  return request({
    url: '/test/delete',
    method: 'post',
    params: { id }
  })
}
