import express from 'express';
import getTodos from '../controller/getTodos';
import createTodo from '../controller/createTodo';
import editTodo from '../controller/editTodo';
import removeTodo from '../controller/removeTodo';

const router = express.Router();

router.get('/todo', getTodos);
router.post('/todo', createTodo);
router.put('/todo', editTodo);
router.delete('/todo/:id', removeTodo);

export default router;
