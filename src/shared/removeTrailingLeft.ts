/**
 * Removes the trailing character from the left side of the string.
 */
export function removeTrailingLeft(value: string, character: unknown): string {
    if (!character || typeof character !== 'string' || character.length > 1) throw new Error('Invalid character');

    if (!value) return value;

    let normalizedValue = value;
    while (normalizedValue.startsWith(character)) {
        normalizedValue = normalizedValue.slice(1);
    }

    return normalizedValue;
}
