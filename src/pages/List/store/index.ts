
import { defineStore, storeToRefs } from 'pinia';
import { computed, ref, watchEffect } from 'vue';

import { fetchShows, searchShows, sortShows, type Show } from '@/entities/show';
// import type { Show } from '@/entities/show/types';
import { createState } from '@/shared/createStoreRef';
import { debounce } from '@/shared/debounce';

import { useRouteQuery } from '@/shared/useRouteQuery';

/**
 * Show search store
 */
export const useSearch = defineStore('Shows/Search', () => {
    const { state, isLoading, isError, data: shows } = createState([] as Show[]);

    // Controller to kill the fetch
    let abortController: AbortController;

    const debouncedSearch = debounce(searchShows, 120);

    /**
     * Search for shows
     */
    async function load(query: string | null) {
        if (abortController) abortController.abort();
        abortController = new AbortController();

        if (!query) {
            state.loading = true;
            state.error = false;
            state.data = [];
            return;
        }

        try {
            state.loading = true;
            state.error = false;
            const shows = await debouncedSearch(query, abortController.signal);
            state.data = sortShows(shows);
        } catch {
            state.error = true;
        } finally {
            state.loading = false;
        }
    }

    return { load, isLoading, isError, shows };
});

/**
 * Shows list store
 */
export const useList = defineStore('Shows/List', () => {
    const { state, isLoading, isError, data } = createState([] as Show[]);

    // Compute genres from shows
    const genres = computed(() => Array.from(
        new Set(data.value?.flatMap(show => show.genres))
    ).sort());
    const genre = ref(null as string | null);
    const shows = computed(() => {
        if (!data.value) return [];

        // Filter by genre
        const filtered = genre.value
            ? data.value.filter(show => show.genres && show.genres.length && show.genres.includes(genre.value!))
            : data.value;

        // Sort by rating
        return sortShows(filtered);
    });

    /**
     * Load shows
     */
    async function load() {
        try {
            state.loading = true;
            state.error = false;

            // Let's load 4 pages of shows
            state.data = (await Promise.all(
                Array.from({ length: 4 }, (_, idx) => idx).map((page) => fetchShows(page))
            )).flat();
        } catch (e) {
            console.log(e)
            state.error = true;
        } finally {
            state.loading = false;
        }
    }

    function filterByGenre(genreArg: string | null) {
        genre.value = genreArg;
    }

    return { load, filterByGenre, isLoading, isError, shows, genres };
});

export const useShows = () => {
    const searchStore  = useSearch();
    const { shows: searchData } = storeToRefs(searchStore);
    const listStore = useList();
    const { shows: listData, genres, isLoading: isPageLoading, isError: isPageError } = storeToRefs(listStore);

    const isSearchMode = computed(() => !!search.value);
    const isLoading = computed(() => isSearchMode.value ? searchStore.isLoading : listStore.isLoading);
    const isError = computed(() => isSearchMode.value ? searchStore.isError : listStore.isError);
    const shows = computed(() => {
        if (isSearchMode.value) return searchData.value || [];
        return listData.value;
    });

    const genre = useRouteQuery('genre');
    const search = useRouteQuery('search');

    watchEffect(() => {
        searchStore.load(search.value);
    });

    watchEffect(() => {
        listStore.filterByGenre(genre.value);
    });

    const isHelpVisible = ref(true);

    return {
        load: listStore.load,
        isPageLoading, isPageError,
        isLoading, isError,
        shows,
        search,
        genre,
        genres,
        isHelpVisible,
    }
};

// Little shortcut for easier import
export { storeToRefs } from 'pinia';
