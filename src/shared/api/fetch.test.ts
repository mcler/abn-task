import { describe, it, expect } from 'vitest';
import { $fetch } from './fetch';

describe('$fetch', () => {
    it('should return a promise', () => {
        expect($fetch('shows')).toBeInstanceOf(Promise);
    });

    it('should return a JSON object', async () => {
        const data = await $fetch('shows');
        expect(data).toBeInstanceOf(Object);
    });

    it('should return a JSON object even with trailing slash in beginning', async () => {
        const data = await $fetch('/shows');
        expect(data).toBeInstanceOf(Object);
    });
});
