import express from 'express';
import { LoggerFactoryMethod } from 'shared_utils';
import { config } from './config';
import { UniqueEntityID } from '../../../domain/UniqueEntityID';

const baseRouter = express.Router();

baseRouter.get('/health', (_req, res) => {
  const id = new UniqueEntityID();
  const logger = LoggerFactoryMethod.create(id);

  logger.info(JSON.stringify(config()));

  logger.info('health check is ok');

  res.status(200).json({
    ok: true,
    method: 'health',
  });
});

export default baseRouter;
