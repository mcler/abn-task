<template>
    <picture class="aspect-[557/337] flex items-center">
        <source srcset="@/assets/logo.avif" type="image/avif" />
        <source srcset="@/assets/logo.png" type="image/png" />
        <img alt="ABNFLIX" class="block object-cover" src="@/assets/logo.png" />
    </picture>
</template>

<script setup lang="ts">
defineOptions({
    name: 'AppLogo',
});
</script>
