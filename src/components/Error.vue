<template>
    <div class="flex flex-col gap-4 items-center justify-center h-screen p-10">
        <h2 class="text-lg">
            <slot>Sorry, couldn't load the page.</slot>
        </h2>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'AppError',
});

defineEmits<{
    reload: [];
}>();
</script>
