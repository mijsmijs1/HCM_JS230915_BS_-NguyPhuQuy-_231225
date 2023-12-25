import express from 'express';
const Router = express.Router();
import { todoController } from '../controllers/todoList.controller';
Router.post('/todo',todoController.create)
Router.get('/todo',todoController.findAll)
Router.put('/todo/:id',todoController.update)
Router.delete('/todo/:id',todoController.delete)
export default Router;