import { UniqueEntityID } from '../../../src/shared/domain/UniqueEntityID';

describe('Test Shared Domain UniqueEntityID', () => {
  const idTest = 'test';

  it(`should create an UniqueEntityID equal to ${idTest}`, () => {
    const uniqueId = new UniqueEntityID(idTest);
    expect(uniqueId.toValue()).toBe(idTest);
  });

  it(`should create an UniqueEntityID not null`, () => {
    const uniqueId = new UniqueEntityID();
    expect(uniqueId.toValue()).not.toBeNull();
  });
});
