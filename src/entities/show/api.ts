import { $fetch,isValidId,  isValidSearchQuery } from '@/shared/api';
import type { Show, ShowSearchResult } from './types';

export function fetchShows(page = 0) {
  return $fetch<Show[]>(`shows?page=${page}`);
}

export function fetchShow(showId: number) {
  if (!isValidId(showId)) {
    return Promise.reject('Invalid showId');
  }
  return $fetch<Show>(`shows/${showId}`);
}

export function searchShows(query: string, signal: AbortSignal) {
  if (!isValidSearchQuery(query)) {
    return Promise.reject('Invalid query');
  }

  return $fetch<ShowSearchResult[]>(`search/shows?q=${encodeURIComponent(query)}`, { signal })
    .then(res => res.map(result => result.show));
}

export type { Show };
