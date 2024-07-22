<template>
    <Loading v-if="isLoading" />
    <Error v-else-if="isError" />
    <RouterView v-else />
</template>

<script setup lang="ts">
import { watch } from 'vue';

import { Loading, Error } from '@/components';

import { useShow, storeToRefs } from '@/pages/Show';
import { useRouteParam } from '@/shared/useRouteParam';

const { isLoading, isError } = storeToRefs(useShow());

const showId = useRouteParam('id');

watch(showId, (id) => {
    if (id) useShow().load(Number(id));
}, { immediate: true });
</script>
