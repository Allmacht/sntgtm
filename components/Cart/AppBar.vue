<template>
    <v-app-bar color="error" elevation="0">

        <template #prepend>
            <v-btn icon="mdi-chevron-left" @click="$router.back"></v-btn>
        </template>

        <v-app-bar-title>{{ titleStore.getTitle() }}</v-app-bar-title>

        <template #append v-if="titleStore.showCartIcon">
            <CartIcon />
        </template>
    </v-app-bar>
</template>

<script setup lang="ts">

    import { useTitleStore } from '~/store/title.store';

    const titleStore = useTitleStore()

</script>