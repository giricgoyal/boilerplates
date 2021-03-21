
import express from 'express';
import * as controller from './controller';

export const userRouter = express.Router();

userRouter.get('/', controller.get);

userRouter.get('/:id', controller.getById);