export interface getStroeParams {
  category: string
  sort_by: string
  latitude: number | null
  longitude: number | null
  limit: number
  offset: number
}

export interface getLocationInfoParams {
  latitude: number
  longitude: number
  radius: number
}

export interface storeInfoDTO {
  category_name: string
  rest_id: string
  address: string
  name: string
  most_recent_photo_url: string
  average_rating: number
  view: number
  latitude: number
  longitude: number
}

export interface getEditorProposalParams {
  limit: number
  offset: number
}

export interface mainApiVO {
  count: number
  next: string
  previous: string
  results: Array<storeInfoDTO | editorProposalDTO>
}

export interface editorProposalDTO {
  ed_no: string
  title: string
  content: string
  view: number
  url: string
  rest_id: Array<string>
}
