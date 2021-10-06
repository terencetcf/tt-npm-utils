import { stringUtil } from '@utils';

describe('stringUtil', () => {
  it('should return replaced characters', () => {
    // Arrange
    const value = 'A b A b A b A B';

    // Act
    const actual = stringUtil.replaceAll(value, 'b', 'A');

    // Assert
    expect(actual).toEqual('A A A A A A A B');
  });
});
