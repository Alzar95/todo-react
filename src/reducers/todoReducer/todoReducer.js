import {todoConstants} from '../../utils/constants/constants';

const initialState = {
    todoData: '',
    todoEditData: ''
};

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case todoConstants.CREATE_TODO:
            return {
                ...state,
                todoLastData: action.payload
            }
        case todoConstants.EDIT_TODO:
            return {
                ...state,
                todoEditData: action.payload
            }
        case todoConstants.GET_ERRORS:
            return 'GET_ERRORS';
        default: {
            return state;
        }
    }
}

export default TodoReducer;
