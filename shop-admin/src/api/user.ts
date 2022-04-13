import { ILoginInfo } from './types/user'
import request from '@/utils/request'

interface ResponseData<T = any> {
  status: number
  msg: string
  data: T
}

export const getUserInfo = () => {
  return request<ILoginInfo>({
    url: '/users',
    method: 'GET'
  })
  // return request.get<ResponseData<{
  //     logo_square: string
  //     logo_rectangle: string
  //     login_logo: string
  //     slide: string[]
  // }>>('/users')
}
