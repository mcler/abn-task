import { removeTrailingLeft } from '../removeTrailingLeft';

/**
 * Fetch data from the TVMaze API
 */
export function $fetch<T>(url: string, init?: RequestInit): Promise<T> {
    if (!url) return Promise.reject('Invalid URL');

    const normalizedUrl = removeTrailingLeft(url, '/');
    return fetch(`${import.meta.env.VITE_API_URL}/${normalizedUrl}`, init)
        .then(res => res.json());
}
