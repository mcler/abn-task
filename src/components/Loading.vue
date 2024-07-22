<template>
    <div aria-busy="true" class="flex items-center justify-center p-10">
        <svg
            class="animate-spin h-5 w-5 text-zinc-600 dark:text-zinc-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            :viewBox="`0 0 ${size} ${size}`"
        >
            <circle
                class="opacity-25"
                :cx="size / 2"
                :cy="size / 2"
                :r="radius"
                stroke="currentColor"
                :stroke-width="strokeWidth"
                :stroke-dasharray="strokeDashArray"
            ></circle>
        </svg>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { clamp } from '@/shared/clamp';

defineOptions({
    name: 'AppLoading',
});

const props = withDefaults(
    defineProps<{
        /**
         * The radius of the loading indicator.
         */
        radius?: number;
        /**
         * The stroke width of the loading indicator.
         */
        strokeWidth?: number;
        /**
         * The value of the loading indicator (out of 100).
         */
        value?: number;
    }>(),
    {
        radius: 24,
        strokeWidth: 8,
        value: 75,
    }
);

const size = computed(() => 2 * props.radius + props.strokeWidth);
const circumference = computed(() => 2 * Math.PI * props.radius);
const strokeDashArray = computed(() => `${(clamp(props.value, 0, 100) / 100) * circumference.value} ${circumference.value}`);
</script>
