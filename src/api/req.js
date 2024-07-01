// axios 二次封装 ajax请求
//http发请求，后端用ajax，用http后端必须尽快回复，
import axios from 'axios'

//创建请求实体
const service = axios.create({
    baseURL: '',
    timeout: 5000
})

//请求 interceptors拦截器 
service.interceptors.request.use(config => {
    return config
})
//响应拦截器response
service.interceptors.response.use(res => {
    return res.data;
}, err => {
    return Promise.reject(err)
})
 
export default service