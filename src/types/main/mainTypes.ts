export interface getStroeParams {
  category: string
  sort_by: string
  latitude: number | null
  longitude: number | null
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
