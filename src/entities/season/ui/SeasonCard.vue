<template>
    <router-link :to="{ name: 'season', params: { seasonId: season.id } }" class="block hover:underline focus:outline-none focus-visible:ring focus-visible:ring-blue-500 rounded">
        <ImagePoster :alt="season.name" :image="season.image" />

        <span>
            {{ label }} &middot; {{ episodes }}
        </span>
    </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ImagePoster } from '@/entities/image';
import type { Season } from '../types';
import { formatCounter } from '@/shared/formatCounter';

defineOptions({
    name: 'SeasonCard',
});

const props = defineProps<{
    season: Season;
}>();

const label = computed(() => props.season.name ? props.season.name : `Season ${props.season.number}`);
const episodes = computed(() => formatCounter(props.season.episodeOrder, 'episode', 'episodes'));
</script>
