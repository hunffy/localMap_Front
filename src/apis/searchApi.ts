import { getSearchInfoParams } from '../types/searchResult/searchResultType'
import { BaseUrl } from '../utils/axiosConfig'
import axios from 'axios'

export const getSearchInfo = async (params: getSearchInfoParams) => {
  const url = BaseUrl + '/restaurant/get_search_rest'
  try {
    const response = await axios.get(url, { params })
    return response.data
  } catch (error) {
    alert('위치 정보를 확인해주세요')
  }
}
