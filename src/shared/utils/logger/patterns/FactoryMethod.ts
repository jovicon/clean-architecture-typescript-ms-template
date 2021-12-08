import { UniqueEntityID } from '../../../../shared/domain/UniqueEntityID';
import { Logger } from '../Logger';

abstract class LoggerCreator {
  public abstract create(id: UniqueEntityID): Logger;
}

export class LoggerFactoryMethod extends LoggerCreator {
  public create(id: UniqueEntityID) {
    return new LoggerImplementation(id);
  }
}

class LoggerImplementation implements Logger {
  private _id: UniqueEntityID;

  constructor(id: UniqueEntityID) {
    this._id = id;
  }

  get id(): UniqueEntityID {
    return this._id;
  }

  error(message: string) {
    console.log(`[${this._id}] [ERROR]: [ ${message} ]`);
  }

  warn(message: string) {
    console.log(`[${this._id}] [WARN]: [ ${message} ]`);
  }

  info(message: string) {
    console.log(`[${this._id}] [INFO]: [ ${message} ]`);
  }

  http(message: string) {
    console.log(`[${this._id}] [HTTP]: [ ${message} ]`);
  }

  verbose(message: string) {
    console.log(`[${this._id}] [VERBOSE]: [ ${message} ]`);
  }

  debug(message: string) {
    console.log(`[${this._id}] [DEBUG]: [ ${message} ]`);
  }

  silly(message: string) {
    console.log(`[${this._id}] [SILLY]: [ ${message} ]`);
  }
}
