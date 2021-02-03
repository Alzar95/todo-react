import mongoose from 'mongoose';
import TodoModel from '../models/todo.model';

const createTodo = (req, res) => {
    const newTodo = new TodoModel({
        _id: new  mongoose.Types.ObjectId(),
        made: req.body.made,
        todoData: req.body.todoData,
    });

    newTodo.save().then(lastData => {
        res.send(lastData);
    });
};

export default createTodo;
