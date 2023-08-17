export interface loginParams {
  email: string
  password: string
}

export interface loginDTO {
  refresh_token: string
  access_token: string
  email: string
  name: string
}
