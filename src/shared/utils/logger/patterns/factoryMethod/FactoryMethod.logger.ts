import { Logger } from '../../Logger';
import { UniqueEntityID } from '../../../../domain/UniqueEntityID';

export class LoggerImplementation implements Logger {
  private id: UniqueEntityID;

  constructor(id: UniqueEntityID) {
    this.id = id;
  }

  error(message: string): void {
    console.log(`[${this.id}] [ERROR]: [ ${message} ]`);
  }

  warn(message: string): void {
    console.log(`[${this.id}] [WARN]: [ ${message} ]`);
  }

  info(message: string): void {
    console.log(`[${this.id}] [INFO]: [ ${message} ]`);
  }

  http(message: string): void {
    console.log(`[${this.id}] [HTTP]: [ ${message} ]`);
  }

  verbose(message: string): void {
    console.log(`[${this.id}] [VERBOSE]: [ ${message} ]`);
  }

  debug(message: string): void {
    console.log(`[${this.id}] [DEBUG]: [ ${message} ]`);
  }

  silly(message: string): void {
    console.log(`[${this.id}] [SILLY]: [ ${message} ]`);
  }
}
