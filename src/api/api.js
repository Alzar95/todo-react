import axios from 'axios';
import config from '../../etc/config.json';

const getTodo = () => {
    return axios.get(`${config.apiPrefix}/todo`);
};

const createTodo = (dataTodo) => {
    return axios.post(`${config.apiPrefix}/todo`, dataTodo);
}

const editTodo = (dataTodo) => {
    return axios.put(`${config.apiPrefix}/todo`, dataTodo);
}

const removeTodo = (idTodo) => {
    return axios.delete(`${config.apiPrefix}/todo/${idTodo}`);
}

const api = {
    getTodo,
    createTodo,
    editTodo,
    removeTodo
}

export default api;
