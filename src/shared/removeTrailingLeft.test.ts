import { describe, it, expect } from 'vitest';
import { removeTrailingLeft } from './removeTrailingLeft';

describe('removeTrailingLeft', () => {
    it('should remove the trailing character from the left side of the string', () => {
        expect(removeTrailingLeft('hello', 'h')).toBe('ello');
        expect(removeTrailingLeft('oolong', 'o')).toBe('long');
        expect(removeTrailingLeft('hello', 'e')).toBe('hello');
        expect(removeTrailingLeft('hello', 'o')).toBe('hello');
    });

    it('should throw an error for an invalid character', () => {
        expect(() => removeTrailingLeft('hello', 'hello')).toThrow('Invalid character');
        expect(() => removeTrailingLeft('hello', 1)).toThrow('Invalid character');
        // @ts-expect-error
        expect(() => removeTrailingLeft('hello')).toThrow('Invalid character');
        expect(() => removeTrailingLeft('hello', null)).toThrow('Invalid character');
        expect(() => removeTrailingLeft('hello', undefined)).toThrow('Invalid character');
    });
});

