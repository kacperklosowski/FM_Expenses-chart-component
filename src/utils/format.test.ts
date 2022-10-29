import {describe, it, expect} from 'vitest';
import {formatToAmericanDollar} from './format';

describe('formatToAmericanDollar()', () => {
  it('should format a given number to the American Dollar', () => {
    const input = 1234.56;
    const expectedResult = '$1,234.56';

    const result = formatToAmericanDollar(input);
    expect(result).toBe(expectedResult);
  });
});
