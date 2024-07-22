import type { Show } from '../types';

export function getShowYears(show?: Show | null | undefined): string | undefined {
    if (!show || !('premiered' in show) || !show.premiered) {
        return undefined;
    }
    const premiered = new Date(show.premiered).getFullYear().toString();
    const ended = show.ended ? (new Date(show.ended).getFullYear().toString()) : '...';
    return premiered === ended ? premiered : [premiered, ended].join('–');
}
