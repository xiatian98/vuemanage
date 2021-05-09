import request from '../util/request'

export function Login(params){
    return request({
        url:'User/SignIn',
        method:'post',
        data:params
    })
}
