import express from 'express';
import baseRouter from '../routes';

const v1Router = express.Router();

v1Router.use(baseRouter);

export { v1Router };
