<template>
    <Loading v-if="isLoading" />
    <Error v-else-if="isError" />
    <main v-else-if="show" class="details-page">
        <aside class="details-page__aside">
            <ImagePoster class="details-page__poster" :alt="show.name" drop-shadow :image="show.image" />
        </aside>

        <section class="details-page__info">
            <p v-if="years" class="details-page__years">{{ years }}</p>
            <h1 class="details-page__title">{{ show.name }}</h1>
            <ul class="details-page__list">
                <Tag v-if="rating">★ {{ rating }}</Tag>
                <Tag v-if="show.ended">&#10003; Ended</Tag>
                <Tag v-else-if="show.status">&#x23f5; {{ show.status }}</Tag>
                <Tag v-if="show.averageRuntime">&#9202; {{ show.averageRuntime }} min.</Tag>
            </ul>
            <ul v-if="show.genres.length" class="details-page__list">
                <RouterLink v-for="genre of show.genres" :key="genre" :to="{ name: 'list', query: { genre } }">
                    <Tag>{{ genre }}</Tag>
                </RouterLink>
            </ul>

            <p v-if="show.officialSite">
                <a :href="show.officialSite" rel="noref noopener">Official site</a>
            </p>

            <section aria-label="Summary" v-html="show.summary" class="text-base md:text-lg"></section>
        </section>

        <section class="details-page__content">
            <section>
                <h2 class="details-page__caption">Seasons</h2>
                <ul class="details-page__seasons">
                    <SeasonCard v-for="season of seasons" :key="season.id" :season />
                </ul>
            </section>

            <section v-if="castMembers.length">
                <h2 class="details-page__caption">Cast</h2>
                <ul class="details-page__grid">
                    <CastListItem v-for="cast of castMembers" :key="cast.person.id" :cast />
                </ul>
            </section>

            <section v-if="crewMembers.length">
                <h2 class="details-page__caption">Crew</h2>
                <ul class="details-page__grid">
                    <CrewListItem v-for="crew of crewMembers" :key="crew.person.id" :crew />
                </ul>
            </section>
        </section>
    </main>
</template>

<script setup lang="ts">
// import { watch } from 'vue';

import { Loading, Error, Tag } from '@/components';

import { CastListItem } from '@/entities/cast';
import { CrewListItem } from '@/entities/crew';
import { ImagePoster } from '@/entities/image';
import { SeasonCard } from '@/entities/season';

import { useShow, storeToRefs } from '@/pages/Show';

const { isLoading, isError, show, castMembers, crewMembers, seasons, rating, years } = storeToRefs(useShow());
</script>

<style lang="pcss">
.details-page {
    @apply grid gap-8 p-10 my-10 max-w-screen-lg mx-auto;

    grid-template:
        "aside" auto
        "info" auto
        "content" auto
        / 1fr;

    @screen md {
        grid-template:
            "aside info" auto
            "content content" auto
            / 240px 1fr;
    }

    &__aside {
        grid-area: aside;
    }

    &__poster {
        @apply mx-auto md:mx-0 w-fit md:w-full;
    }

    &__info {
        grid-area: info;

        @apply flex flex-col gap-3;
    }

    &__list {
        @apply flex flex-wrap gap-2;
    }

    &__years {
        @apply text-base leading-none;
    }

    &__title {
        @apply text-4xl md:text-7xl font-extrabold mb-1 -mt-3;
    }

    &__content {
        grid-area: content;

        @apply flex flex-col gap-4;
    }

    &__caption {
        @apply bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 px-2 -mx-2 text-lg font-bold mb-2 sticky top-10;
    }

    &__seasons {
        @apply grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5;
    }

    &__grid {
        @apply grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
    }
}
</style>
