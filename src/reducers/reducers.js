import { combineReducers } from 'redux';
import TodoReducer from './todoReducer/todoReducer';

const rootReducer = combineReducers({
    todo: TodoReducer,
});

export default rootReducer;
