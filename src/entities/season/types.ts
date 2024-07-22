import type { Image } from '@/entities/image';
import type { Link } from '@/entities/link';
import type { Network } from '@/entities/network';

export type Season = {
    id: number;
    url: string;
    number: number;
    name: string;
    episodeOrder: number;
    premiereDate: string;
    endDate: string;
    network: Network;
    webChannel: string | null;
    image: Image;
    summary: string;
    _links: {
        self: Omit<Link, 'name'>;
    };
};
