/**
 * Little helper to check if an ID is valid
 */
export function isValidId(id: unknown) {
    return !!id && typeof id === 'number' && id > 0 && Number.isInteger(id);
}