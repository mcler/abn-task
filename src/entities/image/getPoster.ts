import posterEmptySvg from '@/assets/poster-empty.svg?url';
import type { Image } from './types';

export function getPoster(image: Image | undefined | null, size: 'medium' | 'original' = 'medium'): string {
    return image?.[size] ?? posterEmptySvg;
}

export { posterEmptySvg as POSTER_EMPTY_SVG };
