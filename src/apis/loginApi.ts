import axios from 'axios'
import { BaseUrl } from '../utils/axiosConfig'
import { loginParams } from '../types/login/loginTypes'

//email : user@example.com
//password : string
export const login = async (params: loginParams) => {
  const url = BaseUrl + '/user/login/normal'
  try {
    const response = await axios.post(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: params
    })
    return response.data
  } catch (error) {
    alert('로그인 정보를 확인해주세요')
  }
}
