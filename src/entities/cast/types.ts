import type { Person } from '@/entities/person';

export type Character = {
    id: number;
    url: string;
    name: string;
    image: {
        medium: string;
        original: string;
    } | null;
    _links: {
        self: {
            href: string;
        };
    };
};

export type CastMember = {
    person: Person;
    character: Character;
    self: boolean;
    voice: boolean;
};
