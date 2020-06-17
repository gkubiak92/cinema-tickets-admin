import { createStore, applyMiddleware, Middleware } from "redux";
import logger from "redux-logger";
import persistedRootReducer from "./root.reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root.saga";
import { persistStore } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(
  persistedRootReducer,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
