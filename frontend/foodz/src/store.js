

import {restaurantsReducer} from './reducer/Restaurants/restaurantsReducer'
import {foodsReducer} from './reducer/Foods/foodsReducer'
import { applyMiddleware, createStore, combineReducers,} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    restaurant  : restaurantsReducer,
    food: foodsReducer,
})

const middlewares = [thunk];
export const store =  createStore(rootReducer , applyMiddleware(...middlewares))


