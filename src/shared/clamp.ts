/**
 * Clamps a value between a minimum and maximum value.
 */
export function clamp(value: number, min: number, max: number) {
    if (value === undefined || value === null || typeof value !== 'number' || Number.isNaN(value)) {
        throw new Error('Value should be a number.');
    }

    if (min > max) {
        throw new Error('The min value cannot be greater than the max value.');
    }

    return Math.min(Math.max(value, min), max);
}
