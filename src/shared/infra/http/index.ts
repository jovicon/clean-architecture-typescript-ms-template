import dotenv from 'dotenv';
import { server, ServerEnvironment } from './server';

dotenv.config();

const serverEnvironment: ServerEnvironment = {
  PORT: process.env.PORT ? +process.env.PORT : 3000,
  PATH_BASE_MS: process.env.PATH_BASE_MS ? process.env.PATH_BASE_MS : '/api/v1/',
};

const app = server(serverEnvironment);

export { app };
