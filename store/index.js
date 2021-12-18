import {todoAppReducer} from './reducers';
import { combineReducers } from 'redux';
import { createStore } from 'redux';

const store = createStore(todoAppReducer);

export default store;