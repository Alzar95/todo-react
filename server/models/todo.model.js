import mongoose from 'mongoose';

const todo = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    made: {type: Boolean, required: true},
    todoData: {type: String, required: true}
});

const TodoModel = mongoose.model('Todo', todo);

export default TodoModel;
