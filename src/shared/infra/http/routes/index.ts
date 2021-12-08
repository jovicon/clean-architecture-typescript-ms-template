import express from 'express';
import { LoggerFactoryMethod } from '../../../utils/logger/Logger';
import { UniqueEntityID } from '../../../domain/UniqueEntityID';
const baseRouter = express.Router();

baseRouter.get('/health', (_req, res) => {
  const id = new UniqueEntityID();
  const log = new LoggerFactoryMethod().create(id);

  log.info('health check is ok');

  res.status(200).json({
    ok: true,
    method: 'health',
  });
});

export default baseRouter;
