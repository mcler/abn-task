import { $fetch, isValidId } from '@/shared/api';
import type { Episode } from './types';

/**
 * Fetch the episodes of a show by its showId
 */
export function fetchEpisodes(seasonId: number) {
  if (!isValidId(seasonId)) {
    return Promise.reject('Invalid seasonId');
  }
  return $fetch<Episode[]>(`seasons/${seasonId}/episodes`);
}
