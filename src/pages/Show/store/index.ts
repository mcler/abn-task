
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import { fetchCast, type CastMember } from '@/entities/cast';
import { fetchCrew } from '@/entities/crew';
import { getShowYears, fetchShow } from '@/entities/show';
import { fetchSeasons } from '@/entities/season';
import type { Show } from '@/entities/show/types';
import { createState } from '@/shared/createStoreRef';
import type { CrewMember } from '@/entities/crew/types';

import type { Season } from '@/entities/season';

export const useShow = defineStore('Show', () => {
    const { state, isLoading, isError, data: show } = createState<Show>();
    const castMembers = ref([] as CastMember[]);
    const crewMembers = ref([] as CrewMember[]);
    const seasons = ref([] as Season[]);

    const rating = computed(() => show.value?.rating?.average);
    const years = computed(() => getShowYears(show.value));

    async function load(id: number) {
        try {
            state.loading = true;
            state.error = false;
            [
                state.data,
                castMembers.value,
                crewMembers.value,
                seasons.value,
            ] = await Promise.all([
                fetchShow(id),
                fetchCast(id),
                fetchCrew(id),
                fetchSeasons(id),
            ]);
        } catch {
            state.error = true;
        } finally {
            state.loading = false;
        }
    }

    return { load, isLoading, isError, show, castMembers, crewMembers, rating, seasons, years };
});

// Little shortcut for easier import
export { storeToRefs } from 'pinia';
