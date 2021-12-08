/**
 * Required External Modules
 */
import express from 'express';
import listEndpoints from 'express-list-endpoints';
import { v1Router } from './api/v1';

interface ServerEnvironment {
  PORT: number;
  PATH_BASE_MS: string;
}

const server = (env: ServerEnvironment) => {
  /**
   * App Variables
   */
  const { PORT, PATH_BASE_MS } = env;
  const app = express();
  // const loggerCreator = new HttpLoggerCreator();
  // const logger = loggerCreator.factoryMethod();

  /**
   * App Configuration
   */
  app.use(express.json());
  app.use(`${PATH_BASE_MS}`, v1Router);

  /**
   * Express Server Activation
   */
  return app.listen(PORT, () => {
    console.log('|------------------------------------------------------------------|');
    console.log('| SERVICE: WELLNESS ADVANCE MS');
    console.log('| AUTHOR: José Contreras');
    console.log(`| SERVER REST OK: Port ${PORT}`);
    console.log('|------------------------------------------------------------------');
    console.log(`| Swagger path: ${PATH_BASE_MS}/api_docs`);
    console.log('|------------------------------------------------------------------');
    console.log('|------------------------------------------------------------------|');
    console.log('| Routes Enabled');
    console.log('|------------------------------------------------------------------|');
    listEndpoints(app).forEach((route: any, index: number) => {
      console.log(`| ${index + 1}.- ${JSON.stringify(route)}`);
    });
    console.log('|------------------------------------------------------------------|\n');
  });
};

export { server, ServerEnvironment };
