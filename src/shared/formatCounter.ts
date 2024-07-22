export function formatCounter(counter: number, singular: string, plural: string): string | undefined {
    if (counter === undefined || counter === null || Number.isNaN(counter)) return undefined;

    return `${counter} ${counter === 1 ? singular : plural}`;
}
