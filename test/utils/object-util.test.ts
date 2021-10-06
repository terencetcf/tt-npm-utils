import { objectUtil } from '@utils';

describe('objectUtil', () => {
  test.each([
    ['   ', true],
    [undefined, true],
    [NaN, true],
    [{}, true],
    [[], true],
    [[1], false],
    ['1', false],
    [{ a: 1 }, false],
  ])(
    'should return expected result for (%s)',
    (value: SafeAny, expected: boolean) => {
      // Act
      const actual = objectUtil.isEmpty(value);

      // Arrange
      expect(actual).toEqual(expected);
    },
  );
});
