<template>
    <PersonListItem
        :description
        :person="cast.person"
    />
</template>

<script setup lang="ts">
import { PersonListItem } from '@/entities/person';
import type { CastMember } from '../types';
import { computed } from 'vue';

defineOptions({
    name: 'CastMember',
});

const props = defineProps<{
    cast: CastMember;
}>();

const description = computed(() => {
    let text = props.cast.character.name;

    if (props.cast.self) {
        text += ' (self)';
    } else if (props.cast.voice) {
        text += ' (voice)';
    }

    return text;
});
</script>
