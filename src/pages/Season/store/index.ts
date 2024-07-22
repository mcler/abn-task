import { defineStore } from 'pinia';
import { computed } from 'vue';

import { fetchEpisodes, type Episode } from '@/entities/episode';
import { useRouteParam } from '@/shared/useRouteParam';
import { createState } from '@/shared/createStoreRef';
import { useShow, storeToRefs } from '@/pages/Show';

export const useSeason = defineStore('Season', () => {
    const { isLoading, isError, data } = createState<Episode[]>([]);
    const { show } = storeToRefs(useShow());
    const season = computed(() => useShow().seasons?.find((s) => s.id === Number(seasonId.value)));
    const seasonId = useRouteParam('seasonId');

    async function load(seasonId: number) {
        try {
            isLoading.value = true;
            isError.value = false;
            data.value = await fetchEpisodes(seasonId);
        } catch {
            isError.value = true;
        } finally {
            isLoading.value = false;
        }
    }

    return { load, isLoading, isError, season, episodes: data, show };
});

export { storeToRefs } from 'pinia';
