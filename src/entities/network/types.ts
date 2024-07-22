import type { Country } from '@/entities/country';

export type Network = {
    id: number;
    name: string;
    country: Country;
    officialSite: string;
};
