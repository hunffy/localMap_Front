//액션타입 생성
const SET_USER_LOCATION = 'user/location'
const SET_USER_TOKENS = 'user/tokens'

//액션생성함수
export const locationSet = (location: UserState['coordinates']) => ({
  type: SET_USER_LOCATION,
  payload: location
})

export const tokenSet = (tokens: UserState['tokens']) => ({
  type: SET_USER_TOKENS,
  payload: tokens
})

type UserAction = ReturnType<typeof locationSet> | ReturnType<typeof tokenSet>

//상태(state) 타입정의
export type UserState = {
  tokens: {
    accessToken: string
    refreshToken: string
  }
  coordinates: { lat: number; lng: number }
}

const initialState: UserState = {
  tokens: {
    accessToken: '',
    refreshToken: ''
  },
  coordinates: { lat: 0, lng: 0 }
}

export default function userReducer(
  state: UserState = initialState,
  action: UserAction
) {
  switch (action.type) {
    case SET_USER_LOCATION:
      state.coordinates = action.payload as { lat: number; lng: number }
      return state

    case SET_USER_TOKENS:
      return (state.tokens = action.payload as {
        accessToken: string
        refreshToken: string
      })

    default:
      return state
  }
}
