<template>
    <div class="relative">
        <ImagePicture
            v-if="dropShadow"
            aria-hidden="true"
            class="absolute inset-0 z-1"
            :class="{
                'blur-2xl group-hover:blur-3xl md:transition-[filter,opacity,transform] md:opacity-20 md:group-hover:opacity-100 md:scale-90 md:group-hover:scale-100 ease-expo': hoverable,
            }"
            :image
            :horizontal
            :responsive
        />
        <ImagePicture
            class="relative z-2"
            :class="{ 'md:transition-[filter,transform] md:scale-90 md:group-hover:scale-100 md:saturate-50 md:group-hover:saturate-100 ease-expo': hoverable }"
            :image
            :horizontal
            :responsive
        />
    </div>
</template>

<script setup lang="ts">
import ImagePicture from './ImagePicture.vue';

import type { Image } from '../types';

defineOptions({
    name: 'ImagePoster',
});

defineProps<{
    /**
     * The alt text for the image.
     */
    alt?: string;
    /**
     * Whether the image should have a drop shadow.
     */
    dropShadow?: boolean;
    /**
     * Whether the image should be horizontal.
     */
    horizontal?: boolean;
    /**
     * Whether the image should be hoverable.
     */
    hoverable?: boolean;
    /**
     * Whether the image should be hoverable.
     */
    responsive?: boolean;
    /**
     * The source of the image.
     */
    image?: Image | null | undefined;
}>();
</script>
