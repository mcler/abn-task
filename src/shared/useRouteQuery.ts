import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export function useRouteQuery(name: string) {
    const router = useRouter();
    const route = useRoute();

    return computed({
        get: () => route.query[name] as string | null ?? null,
        set: (value: string | null) => {
            router.push({
                query: {
                    ...route.query,
                    [name]: value,
                },
            });
        },
    })
}