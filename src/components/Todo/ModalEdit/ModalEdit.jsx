import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {todoConstants} from '../../../utils/constants/constants';
import actions from '../../../actions/actions';
import './ModalEdit.css';

const ModalEdit = (props) => {
    const dispatch = useDispatch();
    const switchModalEdit = props.switchModalEdit;

    const editData = useSelector(state => state.todo.todoEditData);

    const changeValueTodo = (event) => {
        const newEditData = {
            _id: editData._id,
            made: editData.made,
            todoData: event.target.value
        };

        dispatch({
            type: todoConstants.EDIT_TODO,
            payload: newEditData
        });
    };

    const handleSubmitEditTodo = async () => {
        await dispatch(actions.editTodo(editData));
        switchModalEdit(false);
    };

    return (
        <div className="todo-edit">
            <span className="todo-edit-title">Edit</span>
            <div className="todo-edit-input">
                <input value={editData.todoData} onChange={changeValueTodo}/>
            </div>
            <div className="todo-edit-btn">
                <button className="todo-edit-btn-edit" onClick={handleSubmitEditTodo}>Edit</button>
                <button className="todo-edit-btn-close" onClick={() => switchModalEdit(false)}>Close</button>
            </div>
        </div>
    )
};

export default ModalEdit;
