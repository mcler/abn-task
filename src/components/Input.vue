<template>
    <AppControl :disabled>
        <template #default="{ classes }">
            <input v-model="model" :class="classes" :type :placeholder />
        </template>
    </AppControl>
</template>

<script setup lang="ts">
import AppControl from './Control.vue';

defineOptions({
    name: 'AppInput',
});

withDefaults(
    defineProps<{
        /**
         * Whether the input is disabled.
         */
        disabled?: boolean;
        /**
         * The input's placeholder.
         */
        placeholder?: string;
        /**
         * The input's type.
         */
        type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url';
    }>(),
    {
        type: 'text',
    }
);

/**
 * The model of the input.
 */
const model = defineModel<string>({ required: true });
</script>
