import type { CastMember } from '@/entities/cast';
import type { Image } from '@/entities/image';
import type { Link } from '@/entities/link';
import type { Rating } from '@/entities/rating';

export type Episode = {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    type: string;
    airdate: string;
    airtime: string;
    airstamp: string;
    runtime: number;
    rating: Rating;
    image: Image;
    summary: string; // HTML string
    _links: {
        self: Link;
        show: Link;
    };
    _embedded: {
        guestcast: CastMember[];
    };
};
