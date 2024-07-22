import type { Show } from '../types';

/**
 * Sorts shows by rating (desc)
 */
export function sortShows(shows: Show[]) {
    // Sort by rating
    return shows.sort((a, b) => (b.rating.average || 0) - (a.rating.average || 0));
}
