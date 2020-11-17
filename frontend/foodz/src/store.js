import { restaurantsReducer } from "./reducer/Restaurants/restaurantsReducer";
import { foodsReducer } from "./reducer/Foods/foodsReducer";
import { signupReducer} from "./reducer/Auth/registrationReducer";
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    restaurant: restaurantsReducer,
    food: foodsReducer,
    signup: signupReducer,
});

const middlewares = [thunk];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
