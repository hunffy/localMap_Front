export interface getStroeParams {
  category: string
  sort_by: string
  latitude: number | null
  longitude: number | null
  limit: number
  offset: number
}

export interface storeInfoDTO {
  category_name: string
  rest_id: string
  address: string
  name: string
  most_recent_photo_url: string
  average_rating: number
  view: number
}

export interface storeInfoVO {
  count: number
  next: string
  previous: string
  results: Array<storeInfoDTO>
}
