import React, {Fragment, useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import actions from '../../../actions/actions';
import api from '../../../api/api';
import {todoConstants} from '../../../utils/constants/constants';
import './ListData.css';

const ListData = (props) => {
    const dispatch = useDispatch();
    const draggingItem = useRef();
    const dragOverItem = useRef();

    const [dataTodos, setDataTodos] = useState([]);

    const switchModalEdit = props.switchModalEdit;
    const dataTodosProps = props.dataTodos;

    useEffect(() => {
        setDataTodos(dataTodosProps);
    }, [dataTodosProps]);

    const handleDragStart = (e, position) => {
        draggingItem.current = position;
    };

    const handleDragEnter = (e, position) => {
        dragOverItem.current = position;
        const todosCopy = [...dataTodos];
        const draggingItemContent = todosCopy[draggingItem.current];
        todosCopy.splice(draggingItem.current, 1);
        todosCopy.splice(dragOverItem.current, 0, draggingItemContent);

        draggingItem.current = dragOverItem.current;
        dragOverItem.current = null;
        setDataTodos(todosCopy);
    };

    const handleEdit = (dataCurrentItem) => {
       dispatch({
           type: todoConstants.EDIT_TODO,
           payload: dataCurrentItem
       });

        switchModalEdit(true);
    };

    const handleDelete = (idCurrentItem) => {
        api.removeTodo(idCurrentItem)
            .then(res => {
                if (res.status === 200) {
                    dataTodos.forEach((item, index) => {
                        if (item._id === idCurrentItem) {
                            dataTodos.splice(index, 1);
                        }
                    });
                    setDataTodos([...dataTodos]);
                }
            })
    };

    const handleSubmitChecked = (dataTodo) => {
        dataTodo.made = !dataTodo.made;

        dispatch(actions.editTodo(dataTodo));
    };

    return (
        <Fragment>
            <ul className="todo-list">
                {
                    dataTodos.map((item, index) => <li className="todo-list-item"
                                              onDragStart={(e) => handleDragStart(e, index)}
                                              onDragOver={(e) => e.preventDefault()}
                                              onDragEnter={(e) => handleDragEnter(e, index)}
                                              key={item._id}
                                              draggable>
                        <input type="checkbox" value={item._id} checked={item.made} onChange={() => handleSubmitChecked(item)} />
                        <span className="todo-list-item-text">{item.todoData}</span>
                        <div className="todo-list-item-buttons">
                            <button className="todo-list-item-buttons-edit" onClick={() => handleEdit(item)}>Edit
                            </button>
                            <button className="todo-list-item-buttons-delete"
                                    onClick={() => handleDelete(item._id)}>Delete
                            </button>
                        </div>
                    </li>)
                }
            </ul>
        </Fragment>
    );
};

export default ListData;
