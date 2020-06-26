import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import moviesReducer from "./movies/reducer";
import hallsReducer from "./halls/reducer";
import screeningsReducer from "./screenings/reducer";
import hallReducer from "./hall/reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  halls: hallsReducer,
  screenings: screeningsReducer,
  hall: hallReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

export default persistReducer(persistConfig, rootReducer);
