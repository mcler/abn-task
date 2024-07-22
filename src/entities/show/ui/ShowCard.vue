<template>
    <router-link class="block cursor-pointer group p-8 md:p-2 w-screen md:w-48 rounded select-none snap-center focus:outline-none focus-visible:ring focus-visible:ring-blue-500" :to="{ name: 'details', params: { id: show.id } }">
        <ImagePoster :alt="show.name" class="w-fit md:w-auto mx-auto" drop-shadow hoverable :image="show.image" />
        <div class="mt-1.5 md:px-[5%] text-center md:text-left">
            <span class="block text-lg md:text-base font-medium truncate" v-text="show.name" />
            <div class="mt-1 flex flex-wrap justify-center md:justify-start gap-1.5 md:opacity-0 md:group-hover:opacity-100 transition-opacity min-h-8">
                <ShowRating :show />
                <ShowYears :show />
            </div>
        </div>
    </router-link>
</template>

<script setup lang="ts">
import { ImagePoster } from '@/entities/image';
import type { Show } from '@/entities/show';

import ShowRating from './ShowRating.vue';
import ShowYears from './ShowYears.vue';

defineOptions({
    name: 'ShowCard',
});

defineProps<{
    show: Show;
}>();
</script>
