import axios from 'axios'
import { BaseUrl } from '../utils/axiosConfig'
import { getLocationInfoParams, getStroeParams } from '../types/main/mainTypes'

export const getNearLocalStore = async (params: getStroeParams) => {
  const url = BaseUrl + '/restaurant/get_near_rest'
  try {
    const response = await axios.get(url, { params })
    return response.data
  } catch (error) {
    alert('위치 정보를 확인해주세요')
  }
}

export const getEventLocalStore = async (params: getStroeParams) => {
  const url = BaseUrl + '/restaurant/get_event_rest'
  try {
    const response = await axios.get(url, { params })
    console.log(response.data)
    return response.data
  } catch (error) {
    alert('위치 정보를 확인해주세요')
  }
}

export const getLocationInfo = async (params: getLocationInfoParams) => {
  const url = BaseUrl + '/hjd/search'
  try {
    const response = await axios.get(url, { params })
    console.log(response.data)
    return response.data
  } catch (error) {
    alert('위치 정보를 확인해주세요')
  }
}
