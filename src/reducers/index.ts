import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userReducer";
import modalReducer from "./modalReducer";
const rootReducer = combineReducers({
  userReducer,
  modalReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userReducer"],
  blacklist: [],
};

export default persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
