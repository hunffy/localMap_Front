//액션타입정의
const SET_MODAL = "modal/SET" as const;

//액션 및 상태타입정의
type ModalAction = ReturnType<typeof set>;
type ModalState = {
  state: string;
  cashe1: string;
  cashe2: string;
};

//액션생성함수
export const set = (state: ModalState) => ({
  type: SET_MODAL,
  payload: state,
});

//초기상태값 정의
const initialState: ModalState = {
  state: "",
  cashe1: "",
  cashe2: "",
};

//리듀서 함수
export default function modalReducer(
  state: ModalState = initialState,
  action: ModalAction
) {
  switch (action.type) {
    case SET_MODAL:
      return (state = action.payload);
    default:
      return state;
  }
}
