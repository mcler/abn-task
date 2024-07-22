<template>
    <Tag v-if="rating">★ {{ rating }}</Tag>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { Tag } from '@/components';
import type { Show } from '@/entities/show';

defineOptions({
    name: 'ShowRating',
});

const props = defineProps<{
    show: Show;
}>();

const rating = computed(() => props.show.rating?.average?.toFixed(1));
</script>
