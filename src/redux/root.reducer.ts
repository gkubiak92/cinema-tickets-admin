import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import moviesReducer from "./movies/reducer";
import hallsReducer from "./halls/reducer";
import screeningsReducer from "./screenings/reducer";
import hallReducer from "./hall/reducer";
import authReducer from "./auth/reducer";
import uiReducer from "./ui/reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  halls: hallsReducer,
  screenings: screeningsReducer,
  hall: hallReducer,
  auth: authReducer,
  ui: uiReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

export default persistReducer(persistConfig, rootReducer);
