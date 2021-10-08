import { dateUtil } from '../../src';

describe('dateUtil', () => {
  it('should return current date', () => {
    // Act
    const actual = dateUtil.now();

    // Assert
    expect(actual).toEqual(expect.any(Date));
  });

  it('should return the formatted date', () => {
    // Arrange
    const date = new Date('31-Jan-2021');

    // Act
    const actual = dateUtil.format(date, 'DDMMYYYY');

    // Assert
    expect(actual).toEqual('31012021');
  });
});
