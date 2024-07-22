<template>
    <Loading v-if="isLoading" />
    <Error v-else-if="isError" />
    <main v-else-if="season && show" class="grid gap-8 p-10 my-10 max-w-screen-lg mx-auto">
        <RouterLink class="opacity-50 font-medium" :to="{ name: 'details', params: { id: show.id }}">&larr; {{ show.name }}</RouterLink>
        <h1 class="text-xl font-bold">Season {{ season.number }} {{ season.name }}</h1>
        <ul class="flex flex-col gap-4">
            <EpisodeCard v-for="episode of episodes" :key="episode.id" :episode />
        </ul>
    </main>
</template>

<script lang="ts" setup>
import { watch } from 'vue';


import { Loading, Error } from '@/components';

import { EpisodeCard } from '@/entities/episode';
import { useRouteParam } from '@/shared/useRouteParam';

import { useSeason, storeToRefs } from './store';

const { isLoading, isError, season, show, episodes } = storeToRefs(useSeason());
const seasonId = useRouteParam('seasonId');

watch(seasonId, async (id) => {
    if (!id) return;
    useSeason().load(Number(id));
}, { immediate: true });
</script>
