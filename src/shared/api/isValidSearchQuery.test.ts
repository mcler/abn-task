import { describe, it, expect } from 'vitest';
import { isValidSearchQuery } from './isValidSearchQuery';

describe('isValidSearchQuery', () => {
    it('should return true for a valid string query', () => {
        expect(isValidSearchQuery('search term')).toBe(true);
    });

    it('should return false for an empty string', () => {
        expect(isValidSearchQuery('')).toBe(false);
    });

    it('should return false for null', () => {
        expect(isValidSearchQuery(null)).toBe(false);
    });

    it('should return false for undefined', () => {
        expect(isValidSearchQuery(undefined)).toBe(false);
    });

    it('should return false for a number', () => {
        expect(isValidSearchQuery(123)).toBe(false);
    });

    it('should return false for an object', () => {
        expect(isValidSearchQuery({})).toBe(false);
    });

    it('should return false for a boolean', () => {
        expect(isValidSearchQuery(true)).toBe(false);
        expect(isValidSearchQuery(false)).toBe(false);
    });
});