import { UniqueEntityID } from '../../../../domain/UniqueEntityID';
import { LoggerImplementation } from './FactoryMethod.logger';
import { Logger } from '../../Logger';

export class LoggerFactoryMethod {
  static create(id: UniqueEntityID): Logger {
    return new LoggerImplementation(id);
  }
}
