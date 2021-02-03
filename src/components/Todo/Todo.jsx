import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../../actions/actions';
import api from '../../api/api';
import ListData from './ListData/ListData.jsx';
import ModalEdit from './ModalEdit/ModalEdit.jsx';
import './Todo.css';

const Todo = () => {
    const dispatch = useDispatch();

    const [dataTodos, setDataTodos] = useState([]);
    const [valueFieldTodo, setValueFieldTodo] = useState('');
    const [displayModal, setDisplayModal] = useState(false);

    const editData = useSelector(state => state.todo.todoEditData);
    const todoLastData = useSelector(state => state.todo.todoLastData);

    useEffect(() => {
        const dataTodos = api.getTodo();

        dataTodos.then(data => {
            setDataTodos(data.data);
        });
    }, [editData, todoLastData]);

    const handleInputChangeTodo = e => {
        const {value} = e.target;
        setValueFieldTodo(value);
    }

    const handleSubmitCreateTodo = (event) => {
        event.preventDefault();

        const dataTodo = {
            made: false,
            todoData: valueFieldTodo
        };

        dispatch(actions.createTodo(dataTodo));
        setValueFieldTodo('');
    }

    const switchModalEdit = (switcherModal) => {
        setDisplayModal(switcherModal);
    };

    return (
        <div className="todo">
            {displayModal ? <ModalEdit switchModalEdit={switchModalEdit}/> : null}
            <h1 className="todo-title">ToDo List</h1>

            <form className="todo-add" onSubmit={handleSubmitCreateTodo}>
                <input className="todo-add-field" value={valueFieldTodo} onChange={handleInputChangeTodo} />
                <button className="todo-add-button" type="submit">Add</button>
            </form>
            <ListData switchModalEdit={switchModalEdit} dataTodos={dataTodos} />
        </div>
    );
}

export default Todo;
