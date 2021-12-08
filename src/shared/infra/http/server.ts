/**
 * Required External Modules
 */
import express from 'express';
import listEndpoints, { Endpoint } from 'express-list-endpoints';
import { Server } from 'http';
import { v1Router } from './api/v1';
import { LoggerFactoryMethod } from '../../utils/logger';
import { UniqueEntityID } from '../../domain/UniqueEntityID';

interface ServerEnvironment {
  PORT: number;
  PATH_BASE_MS: string;
}

const server = (env: ServerEnvironment): Server => {
  /**
   * App Variables
   */
  const { PORT, PATH_BASE_MS } = env;
  const app = express();
  const id = new UniqueEntityID();
  const logger = LoggerFactoryMethod.create(id);

  /**
   * App Configuration
   */
  app.use(express.json());
  app.use(`${PATH_BASE_MS}`, v1Router);

  /**
   * Express Server Activation
   */
  return app.listen(PORT, () => {
    logger.info('|------------------------------------------------------------------|');
    logger.info('| SERVICE: CLEAR ARCHITECTURE MICROSERVICE TEMPLATE                |');
    logger.info('| AUTHOR: José Contreras');
    logger.info(`| SERVER REST OK: Port ${PORT}`);
    logger.info('|------------------------------------------------------------------|');
    logger.info('| Routes Enabled');
    logger.info('|------------------------------------------------------------------|');
    listEndpoints(app).forEach((route: Endpoint, index: number) => {
      logger.info(`| ${index + 1}.- ${JSON.stringify(route)}`);
    });
    logger.info('|------------------------------------------------------------------|\n');
  });
};

export { server, ServerEnvironment };
