import { dateUtil } from '../../src';

describe('dateUtil', () => {
  it('should return current date', () => {
    // Act
    const actual = dateUtil.now();

    // Arrange
    expect(actual).toEqual(expect.any(Date));
  });
});
