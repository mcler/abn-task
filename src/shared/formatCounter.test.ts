import { describe, expect, it } from 'vitest';

import { formatCounter } from './formatCounter';

describe('formatCounter', () => {
    it('should return singular counter', () => {
        expect(formatCounter(1, 'shop', 'shops')).toBe('1 shop');
        expect(formatCounter(1, 'whatever', 'whatevers')).toBe('1 whatever');
    });

    it('should return the counter if it is a number', () => {
        expect(formatCounter(2, 'shop', 'shops')).toBe('2 shops');
        expect(formatCounter(20, 'whatever', 'whatevers')).toBe('20 whatevers');
    });

    it('should return undefined if the counter is not a number', () => {
        // @ts-expect-error
        expect(formatCounter(undefined, 'shop', 'shops')).toBe(undefined);
        // @ts-expect-error
        expect(formatCounter(null, 'shop', 'shops')).toBe(undefined);
        expect(formatCounter(NaN, 'shop', 'shops')).toBe(undefined);
    });
});
