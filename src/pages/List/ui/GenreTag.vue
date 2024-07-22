<template>
    <RouterLink
        class="px-4 h-10 leading-10 rounded-full transition-colors whitespace-nowrap focus:outline-none focus-visible:ring focus-visible:ring-blue-500"
        :class="{
            'bg-blue-50 dark:bg-blue-950': !active,
            'bg-blue-200 dark:bg-blue-800': active,
        }"
        :to
    >
        <slot />
    </RouterLink>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

defineProps<{
    active: boolean;
    to: RouteLocationRaw;
}>();
</script>
