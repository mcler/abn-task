import { $fetch, isValidId } from '@/shared/api';
import type { CrewMember } from './types';

/**
 * Fetch the crew of a show by its showId
 */
export function fetchCrew(showId: number) {
  if (!isValidId(showId)) {
    return Promise.reject('Invalid showId');
  }
  return $fetch<CrewMember[]>(`shows/${showId}/crew`);
}
