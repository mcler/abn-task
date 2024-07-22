/**
 * Simple debounce for a function.
 */
export function debounce<T extends (...args: any[]) => ReturnType<T>>(fn: T, delay: number = 100) {
    let timer: ReturnType<typeof setTimeout> | undefined;

    return (...args: Parameters<T>): Promise<ReturnType<T>> => {
        clearTimeout(timer);

        return new Promise((resolve) => {
            timer = setTimeout(() => {
                resolve(fn(...args));
            }, delay);
        });
    };
}
