import api from '../api/api';
import {todoConstants} from '../utils/constants/constants';

const getTodos = () => dispatch => {
    api.getTodos().then(res => {
       dispatch({
             type: todoConstants.GET_TODO,
             payload: res.data
         });
    }).catch(error => console.error(error));
};

const createTodo = (dataTodo) => dispatch => {
    api.createTodo(dataTodo)
        .then(res => {
            dispatch({
                type: todoConstants.CREATE_TODO,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: todoConstants.GET_ERRORS,
                payload: err.response.data
            });
        });
};

const editTodo = (dataTodo) => dispatch => {
    api.editTodo(dataTodo)
        .then(res => {
            dispatch({
                type: todoConstants.EDIT_TODO,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: todoConstants.GET_ERRORS,
                payload: err.response.data
            });
        });
};

const actions = {
    getTodos,
    createTodo,
    editTodo
};

export default actions;
