import TodoModel from '../models/todo.model';

const editTodo = (req, res) => {
    TodoModel.findByIdAndUpdate(req.body._id, {made: req.body.made, todoData: req.body.todoData},
        { upsert: true }, (err) => {
        if (err) {
            return console.log(err);
        }
    }).then(data => {
        res.send(data);
    });
};

export default editTodo;
