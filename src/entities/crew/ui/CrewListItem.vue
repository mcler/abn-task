<template>
    <PersonListItem
        :description="crew.type"
        :person="crew.person"
    />
</template>

<script setup lang="ts">
import { PersonListItem } from '@/entities/person';
import type { CrewMember } from '../types';

defineOptions({
    name: 'CrewListItem',
});

defineProps<{
    crew: CrewMember;
}>();
</script>
