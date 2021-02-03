import TodoModel from '../models/todo.model';

const getTodos = (req, res) => {
    TodoModel.find().then(data => {
        res.send(data);
    });
};

export default getTodos;
