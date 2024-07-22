<template>
    <slot name="default" :classes="['bg-white dark:bg-zinc-950 ring ring-zinc-100 dark:ring-zinc-800 focus:ring-blue-500 text-zinc-900 dark:text-zinc-100 shadow h-12 px-4 rounded focus:outline-none', { 'bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300': disabled }, $attrs.class]" />
</template>

<script setup lang="ts">
defineOptions({
    name: 'AppControl',
});

defineProps<{
    /**
     * Whether the input is disabled.
     */
    disabled?: boolean;
}>();
</script>
