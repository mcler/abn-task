import type { Country } from '@/entities/country';
import type { Image } from '@/entities/image';
import type { Link } from '@/entities/link';
import type { Network } from '@/entities/network';
import type { Rating } from '@/entities/rating';

export type WebChannel = {
    id: number;
    name: string;
    country: string | null
    officialSite: string;
}

export type Show = {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    averageRuntime: number;
    premiered: string;
    ended: string | null;
    officialSite: string | null;
    schedule: {
        time: string;
        days: string[];
    };
    rating: Rating;
    weight: number;
    network: Network | null;
    webChannel: WebChannel[] | null;
    dvdCountry: Country | null;
    externals: {
        tvrage: number | null;
        thetvdb: number;
        imdb: string;
    };
    image: Image | null;
    summary: string;
    updated: number;
    _links: {
        self: Omit<Link, 'name'>;
        previousepisode: Link;
    };
};

export type ShowSearchResult = {
    score: number;
    show: Show;
}
