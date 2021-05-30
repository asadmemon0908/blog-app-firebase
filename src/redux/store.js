import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducers from "./users/usersReducers";


const rootReducer = combineReducers({
  User: userReducers,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;