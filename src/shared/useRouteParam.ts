import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export const useRouteParam = (name: string) => {
    const router = useRouter();
    const route = useRoute();
    const routeName = route.name;

    return computed({
        get: () => route.params[name] as string | null ?? null,
        set: (value: string | null) => {
            if (route.name !== routeName) return;
            router.push({
                params: {
                    ...route.params,
                    [name]: value,
                },
            });
        },
    })
}