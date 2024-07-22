<template>
    <li class="flex flex-col md:flex-row gap-3">
        <ImagePoster
            class="flex-none w-full md:w-60"
            :alt="episode.name"
            horizontal
            :image="episode.image"
            responsive
        />
        <div>
            <h3 class="font-medium">{{ label }}</h3>
            <p class="opacity-50 text-sm">{{ runtime }}</p>
            <p v-if="episode.summary" v-html="episode.summary" />
        </div>
    </li>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { ImagePoster } from '@/entities/image';
import type { Episode } from '../types';
import { formatCounter } from '@/shared/formatCounter';

defineOptions({
    name: 'EpisodeCard',
});

const props = defineProps<{
    episode: Episode;
}>();

const runtime = computed(() => formatCounter(props.episode.runtime, 'minute', 'minutes'));
const label = computed(() => [props.episode.number, props.episode.name].filter(Boolean).join('. '));
</script>
