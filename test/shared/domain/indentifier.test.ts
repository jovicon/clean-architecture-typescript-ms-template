import { Identifier } from '../../../src/shared/domain/Identifier';

describe('Test Shared Domain Identifier', () => {
  it('should create an identifier', () => {
    const identifier = new Identifier('test');
    expect(identifier.toValue()).toBe('test');
  });

  it('should be equals', () => {
    const identifier = new Identifier('test');
    const identifier2 = new Identifier('test');

    expect(identifier.equals(identifier2)).toBe(true);
  });

  it('should not be equals from undefined', () => {
    const identifier = new Identifier('test');

    expect(identifier.equals()).toBe(false);
  });
});
