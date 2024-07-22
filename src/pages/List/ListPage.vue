<template>
    <Loading v-if="isPageLoading" class="h-screen" />
    <Error v-else-if="isPageError" class="h-screen" />
    <template v-else>
        <main class="list-page flex flex-col relative h-screen">
            <section class="mb-10 md:mt-20 order-3 md:order-1 flex flex-col gap-4 items-center justify-center w-full z-50">
                <Input v-model="search" class="shadow-xl" placeholder="Search" type="search" />

                <transition name="fade-fast">
                    <section v-if="!search" class="overflow-x-auto md:px-20 snap-x w-full">
                        <div class="flex gap-2 justify-center max-md:justify-start md:justify-center px-5 py-2 w-fit">
                            <GenreTag :active="!genre" :to="{ query: { genre: undefined } }" class="sticky right-0">
                                All
                            </GenreTag>
                            <GenreTag :active="genre === _genre" v-for="_genre in genres" :key="_genre" :to="{ query: { genre: _genre } }">
                                {{ _genre }}
                            </GenreTag>
                        </div>
                    </section>
                </transition>
            </section>

            <Loading v-if="isLoading" class="flex-grow order-2" />
            <Error v-else-if="isError" class="flex-grow order-2" />
            <Error v-else-if="shows.length === 0" class="flex-grow order-2">
                No shows found.
            </Error>
            <VList v-else ref="listRef" class="order-2 md:px-20 py-10 snap-x" :data="shows" horizontal #default="item" @scroll="isHelpVisible = false">
                <ShowCard
                    class="my-auto"
                    :key="item.id"
                    :show="item"
                />
            </VList>

            <transition name="fade-slow">
                <section v-if="!isLoading && !isError && isHelpVisible" class="absolute max-md:top-20 md:bottom-20 inset-x-0 z-50">
                    <p class="bg-white h-10 leading-10 mx-auto pointer-events-none px-5 rounded-full select-note shadow-xl text-black text-base w-fit whitespace-nowrap">
                        &larr; Scroll to see more shows. &rarr;
                    </p>
                </section>
            </transition>
        </main>
    </template>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { VList } from 'virtua/vue'

import { Loading, Error, Input } from '@/components';
import { ShowCard } from '@/entities/show';
import { useYScrollToX } from '@/shared/useYScrollToX';
import GenreTag from './ui/GenreTag.vue';
import { useShows } from './store';

const {
    isPageLoading, isPageError, isLoading, isError,
    genres, genre,
    shows,
    search,
    isHelpVisible,
} = useShows();

const { load } = useShows();

onMounted(() => {
    load();
});

const listRef = ref<InstanceType<typeof VList>>();
useYScrollToX(listRef);

watch(shows, () => {
    listRef.value?.scrollTo(0);
});
</script>

<style lang="pcss">
@screen md {
    @supports (backdrop-filter: blur(50px)) and (mask: linear-gradient(90deg, black, transparent var(--left), transparent var(--right), black 100%)) {
        .list-page:after {
            --left-black: 30px;
            --left-transparent: 200px;
            --right-transparent: calc(100% - var(--left-transparent));
            --right-black: calc(100% - var(--left-black));

            content: '';
            position: absolute;
            inset: 0;
            backdrop-filter: blur(64px) saturate(50%);
            mask: linear-gradient(90deg, black, rgba(0 0 0 / 0.8) var(--left-black), transparent var(--left-transparent), transparent var(--right-transparent), rgba(0 0 0 / 0.8) var(--right-black));
            pointer-events: none;
            z-index: 9;
        }
    }
}
</style>
