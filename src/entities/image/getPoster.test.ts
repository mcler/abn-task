import { describe, expect, it } from 'vitest';
import { getPoster, POSTER_EMPTY_SVG } from './getPoster';

describe('getPoster', () => {
    it('should return the medium poster if the show has an image', () => {
        expect(getPoster({ medium: 'medium.jpg', original: null })).toBe('medium.jpg');
        expect(getPoster({ medium: 'medium.jpg', original: 'original.jpg' })).toBe('medium.jpg');
    });

    it('should return the original poster if the show has an image', () => {
        expect(getPoster({ medium: null, original: 'original.jpg' }, 'original')).toBe('original.jpg');
        expect(getPoster({ medium: 'medium.jpg', original: 'original.jpg' }, 'original')).toBe('original.jpg');
    });

    it('should return placeholder poster if the show has no specific image', () => {
        expect(getPoster({ medium: 'medium.jpg', original: null }, 'original')).toBe(POSTER_EMPTY_SVG);
        expect(getPoster({ medium: null, original: 'original.jpg' }, 'medium')).toBe(POSTER_EMPTY_SVG);
    });

    it('should return placeholder poster if the show has no image', () => {
        expect(getPoster({ medium: 'medium.jpg', original: null }, 'original')).toBe(POSTER_EMPTY_SVG);
    });

    it('should return placeholder poster for empty show', () => {
        expect(getPoster(null)).toBe(POSTER_EMPTY_SVG);
    });
});
