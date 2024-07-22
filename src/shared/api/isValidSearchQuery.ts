/**
 * Check if the query is a valid search query.
 */
export function isValidSearchQuery(query: unknown): boolean {
  return !!query && typeof query === 'string';
}
