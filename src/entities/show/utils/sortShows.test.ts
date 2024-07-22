import { describe, expect, it } from 'vitest';
import { sortShows } from './sortShows';
import { type Show } from '../types';

describe('sortShows', () => {
    it('should sort shows by rating', () => {
        const shows = [
            { name: '8.5', rating: { average: 8.5 } } as Show,
            { name: '9.5', rating: { average: 9.5 } } as Show,
            { name: '7.5', rating: { average: 7.5 } } as Show,
            { name: '8.0', rating: { average: 8.0 } } as Show,
        ];

        const sortedShows = sortShows(shows);

        expect(sortedShows).toEqual([
            { name: '9.5', rating: { average: 9.5 } } as Show,
            { name: '8.5', rating: { average: 8.5 } } as Show,
            { name: '8.0', rating: { average: 8.0 } } as Show,
            { name: '7.5', rating: { average: 7.5 } } as Show,
        ]);
    });

    it('should sort shows by rating including ones without it', () => {
        const shows = [
            { name: '8.5', rating: { average: 8.5 } } as Show,
            { name: 'No rating', rating: { average: null } } as Show,
            { name: '9.5', rating: { average: 9.5 } } as Show,
            { name: '7.5', rating: { average: 7.5 } } as Show,
            { name: '8.0', rating: { average: 8.0 } } as Show,
        ];

        const sortedShows = sortShows(shows);

        expect(sortedShows).toEqual([
            { name: '9.5', rating: { average: 9.5 } } as Show,
            { name: '8.5', rating: { average: 8.5 } } as Show,
            { name: '8.0', rating: { average: 8.0 } } as Show,
            { name: '7.5', rating: { average: 7.5 } } as Show,
            { name: 'No rating', rating: { average: null } } as Show,
        ]);
    });
});