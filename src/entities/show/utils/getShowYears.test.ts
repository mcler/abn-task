import { describe, expect, it } from 'vitest';
import { getShowYears } from './getShowYears';
import { type Show } from '../types';

describe('getShowYears', () => {
    it('should return year if the show has premiered year', () => {
        expect(getShowYears({ premiered: '2024-12-01' } as Show)).toBe('2024–...');
        expect(getShowYears({ premiered: '2023-10-11' } as Show)).toBe('2023–...');
    });

    it('should return year if the show has ended year', () => {
        expect(getShowYears({ premiered: '2024-12-01', ended: '2027-11-11' } as Show)).toBe('2024–2027');
        expect(getShowYears({ premiered: '2023-10-11', ended: '2028-02-11' } as Show)).toBe('2023–2028');
    });

    it('should return ony year if the show premire and ending year are the same', () => {
        expect(getShowYears({ premiered: '2024-04-01', ended: '2024-08-11' } as Show)).toBe('2024');
        expect(getShowYears({ premiered: '1990-01-11', ended: '1990-12-11' } as Show)).toBe('1990');
    });


    it('should return dash if show is empty', () => {
        expect(getShowYears(null)).toBe(undefined);
        expect(getShowYears(undefined)).toBe(undefined);
    });

    it('should return dash if `premiered` is empty', () => {
        // @ts-expect-error
        expect(getShowYears({ premiered: null })).toBe(undefined);
        // @ts-expect-error
        expect(getShowYears({ premiered: undefined })).toBe(undefined);
        // @ts-expect-error
        expect(getShowYears({ premiered: undefined, ended: '2028-02-11' })).toBe(undefined);
    });
});
