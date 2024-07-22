<template>
    <span class="border border-zinc-600/40 dark:border-zinc-200/40 px-2 rounded text-sm text-zinc-600 dark:text-zinc-200 flex items-center flex-none min-h-0">
        <slot />
    </span>
</template>

<script setup lang="ts">
defineOptions({
    name: 'AppTag',
});
</script>
