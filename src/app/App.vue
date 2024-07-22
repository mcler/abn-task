<script setup lang="ts">
import { RouterView } from 'vue-router';

import { Logo } from '@/components';
</script>

<template>
  <header class="fixed top-0 inset-x-0 bg-zinc-500/5 flex items-center justify-center backdrop-blur-lg h-10 z-10">
    <router-link :to="{ name: 'list', query: undefined, params: undefined }">
      <Logo class="block h-8" />
    </router-link>
  </header>

  <RouterView />
</template>
