import { describe, it, expect } from 'vitest';
import { isValidId } from './isValidId';

describe('isValidId', () => {
    it('should return true for an integer', () => {
        expect(isValidId(1)).toBe(true);
        expect(isValidId(123)).toBe(true);
    });

    it('should return false for a float', () => {
        expect(isValidId(1.1)).toBe(false);
        expect(isValidId(1.123)).toBe(false);
        expect(isValidId(Math.PI)).toBe(false);
    });

    it('should return false for an infinity', () => {
        expect(isValidId(Number.NEGATIVE_INFINITY)).toBe(false);
        expect(isValidId(Number.POSITIVE_INFINITY)).toBe(false);
    });

    it('should return false for NaN', () => {
        expect(isValidId(Number.NaN)).toBe(false);
    });

    it('should return false for a valid string query', () => {
        expect(isValidId('search term')).toBe(false);
    });

    it('should return false for an empty string', () => {
        expect(isValidId('')).toBe(false);
    });

    it('should return false for null', () => {
        expect(isValidId(null)).toBe(false);
    });

    it('should return false for undefined', () => {
        expect(isValidId(undefined)).toBe(false);
    });

    it('should return false for an object', () => {
        expect(isValidId({})).toBe(false);
    });

    it('should return false for a boolean', () => {
        expect(isValidId(true)).toBe(false);
        expect(isValidId(false)).toBe(false);
    });
});