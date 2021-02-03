import TodoModel from '../models/todo.model';

const removeTodo = (req, res) => {
    TodoModel.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            return console.log(err);
        }
    }).then(data => {
        res.send(data);
    });
};

export default removeTodo;
