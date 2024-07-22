import { describe, expect, it } from 'vitest';

import { clamp } from './clamp';

describe('clamp', () => {
    it('should clamp a value between a minimum and maximum value', () => {
        expect(clamp(0, 1, 10)).toBe(1);
        expect(clamp(5, 1, 10)).toBe(5);
        expect(clamp(15, 1, 10)).toBe(10);
    });

    it('should clamp a value between a minimum and maximum value with negative values', () => {
        expect(clamp(-5, -10, -1)).toBe(-5);
        expect(clamp(-15, -10, -1)).toBe(-10);
        expect(clamp(-5, -10, 10)).toBe(-5);
    });

    it('should return the minimum value if the value is less than the minimum', () => {
        expect(clamp(0, 1, 10)).toBe(1);
        expect(clamp(-5, -10, -1)).toBe(-5);
    });

    it('should throw an error is clamped value is not a number', () => {
        // @ts-expect-error
        expect(() => clamp(undefined, 1, 10)).toThrowError('Value should be a number.');
        // @ts-expect-error
        expect(() => clamp(null, 1, 10)).toThrowError('Value should be a number.');
        // @ts-expect-error
        expect(() => clamp(false, 1, 10)).toThrowError('Value should be a number.');
        // @ts-expect-error
        expect(() => clamp('10', 1, 10)).toThrowError('Value should be a number.');

        expect(() => clamp(Number.NaN, 1, 10)).toThrowError('Value should be a number.');
    });

    it('show throw an error if the minimum value is greater than the maximum value', () => {
        expect(() => clamp(0, 10, 1)).toThrowError('The min value cannot be greater than the max value.');
        expect(() => clamp(12, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)).toThrowError('The min value cannot be greater than the max value.');
    });
});
