<template>
    <li class="flex items-center gap-2">
        <picture class="flex items-center justify-center overflow-hidden rounded-full size-14 ring-1 ring-zinc-500/50">
            <img class="object-cover" :alt="person.name" :src="image" loading="lazy" />
        </picture>
        <div>
            <h3 class="text-base">{{ person.name }}</h3>
            <p v-if="description" class="text-sm opacity-75">{{ description }}</p>
        </div>
    </li>
</template>

<script setup lang="ts">
import { getPoster } from '@/entities/image';
import type { Person } from '../types';
import { computed } from 'vue';

defineOptions({
    name: 'PersonListItem',
});

const props = defineProps<{
    person: Person;
    description?: string;
}>();

const image = computed(() => getPoster(props.person.image, 'medium'));
</script>
