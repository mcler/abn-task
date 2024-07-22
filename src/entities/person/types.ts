import type { Country } from '@/entities/country';
import type { Image } from '@/entities/image';

export type Person = {
    id: number;
    url: string;
    name: string;
    country: Country;
    birthday: string | null;
    deathday: string | null;
    gender: 'Male' | 'Female';
    image: Image;
    updated: number;
    _links: {
        self: {
            href: string;
        };
    };
};
