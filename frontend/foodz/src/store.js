import { restaurantsReducer } from "./reducer/Restaurants/restaurantsReducer";
import { foodsReducer } from "./reducer/Foods/foodsReducer";
import { signupReducer} from "./reducer/Auth/registrationReducer";
import { applyMiddleware, createStore, combineReducers } from "redux";
import  ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
    restaurant: restaurantsReducer,
    food: foodsReducer,
    signup: signupReducer,
});

const middlewares = [ReduxThunk];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
