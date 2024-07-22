import { $fetch, isValidId } from '@/shared/api';
import type { Season } from '@/entities/season';

/**
 * Fetch the episodes of a show by its showId
 */
export function fetchSeasons(showId: number) {
  if (!isValidId(showId)) {
    return Promise.reject('Invalid showId');
  }
  return $fetch<Season[]>(`shows/${showId}/seasons`);
}
