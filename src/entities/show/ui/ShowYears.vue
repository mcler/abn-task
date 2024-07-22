<template>
    <Tag v-if="years">{{ years }}</Tag>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { Tag } from '@/components';
import { getShowYears } from '@/entities/show';
import type { Show } from '@/entities/show';

defineOptions({
    name: 'ShowYears',
});

const props = defineProps<{
    show: Show;
}>();

const years = computed(() => getShowYears(props.show));
</script>
