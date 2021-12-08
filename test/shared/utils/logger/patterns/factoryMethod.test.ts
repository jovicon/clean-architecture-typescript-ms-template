import { UniqueEntityID } from '../../../../../src/shared/domain/UniqueEntityID';
import { LoggerFactoryMethod } from '../../../../../src/shared/utils/logger/';

describe('Test Shared Utils Logger Patterns', () => {
  it('Logger should create an instance', () => {
    const id = new UniqueEntityID();
    const logger = LoggerFactoryMethod.create(id);
    expect(logger).not.toBeNull();
  });

  it('Logger should console log an error', () => {
    const id = new UniqueEntityID();
    const log = LoggerFactoryMethod.create(id);

    const logSpy = jest.spyOn(log, 'error');

    log.error('Test Logger error');

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith('Test Logger error');
  });

  it('Logger should console log an warn', () => {
    const id = new UniqueEntityID();
    const log = LoggerFactoryMethod.create(id);

    const logSpy = jest.spyOn(log, 'warn');

    log.warn('Test Logger warn');

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith('Test Logger warn');
  });

  it('Logger should console log an info', () => {
    const id = new UniqueEntityID();
    const log = LoggerFactoryMethod.create(id);

    const logSpy = jest.spyOn(log, 'info');

    log.info('Test Logger info');

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith('Test Logger info');
  });

  it('Logger should console log an http', () => {
    const id = new UniqueEntityID();
    const log = LoggerFactoryMethod.create(id);

    const logSpy = jest.spyOn(log, 'http');

    log.http('Test Logger http');

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith('Test Logger http');
  });

  it('Logger should console log an verbose', () => {
    const id = new UniqueEntityID();
    const log = LoggerFactoryMethod.create(id);

    const logSpy = jest.spyOn(log, 'verbose');

    log.verbose('Test Logger verbose');

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith('Test Logger verbose');
  });

  it('Logger should console log an debug', () => {
    const id = new UniqueEntityID();
    const log = LoggerFactoryMethod.create(id);

    const logSpy = jest.spyOn(log, 'debug');

    log.debug('Test Logger debug');

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith('Test Logger debug');
  });

  it('Logger should console log an silly', () => {
    const id = new UniqueEntityID();
    const log = LoggerFactoryMethod.create(id);

    const logSpy = jest.spyOn(log, 'silly');

    log.silly('Test Logger silly');

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith('Test Logger silly');
  });
});
