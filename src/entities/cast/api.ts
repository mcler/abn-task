import { $fetch, isValidId } from '@/shared/api';
import type { CastMember } from './types';

/**
 * Fetch the cast of a show by its showId
 */
export function fetchCast(showId: number) {
  if (!isValidId(showId)) {
    return Promise.reject('Invalid showId');
  }
  return $fetch<CastMember[]>(`shows/${showId}/cast`);
}