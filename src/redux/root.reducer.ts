import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import moviesReducer from "./movies/movies.reducer";
import hallsReducer from "./halls/halls.reducer";
import screeningsReducer from "./screenings/reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  halls: hallsReducer,
  screenings: screeningsReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

export default persistReducer(persistConfig, rootReducer);
