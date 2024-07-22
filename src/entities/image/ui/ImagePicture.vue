<template>
    <picture
        class="flex items-center justify-center overflow-hidden p-0 rounded-xl ring-1 ring-zinc-500/50"
        :class="{
            'aspect-[210/297] max-h-96 md:max-h-none': !horizontal,
            'aspect-video max-h-56 md:max-h-none': horizontal,
            'md:transition-[filter,transform] md:scale-90 md:group-hover:scale-100 md:saturate-50 md:group-hover:saturate-100 ease-expo': hoverable,
        }"
    >
        <source v-if="responsive" :srcset="medium" media="(min-width: 640px)" />
        <img :alt="alt" class="block object-cover max-w-none h-full w-full" :src="original" loading="lazy" />
    </picture>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getPoster } from '../getPoster';
import type { Image } from '../types';

defineOptions({
    name: 'ImagePicture',
});

const props = defineProps<{
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

const medium = computed(() => getPoster(props.image, 'medium'));
const original = computed(() => getPoster(props.image, 'original'));
</script>
