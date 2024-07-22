import { computed, reactive } from 'vue';

/**
 * Little helper to create a store ref with a loading and error state
 */
export function createState<T>(initialData: T | null = null) {
    const state = reactive({
        loading: false,
        error: false,
        data: initialData
    });
    const isLoading = computed({
        get: () => state.loading,
        set: (value: boolean) => {
            state.loading = value;
        }
    });
    const isError = computed({
        get: () => state.error,
        set: (value: boolean) => {
            state.error = value;
        }
    });
    const data = computed({
        get: () => state.data as T | null,
        set: (value: T | null) => {
            (state.data as T | null) = value;
        }
    });

    return {
        state,
        isLoading,
        isError,
        data
    };
}
