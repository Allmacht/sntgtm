<template>
    <v-app-bar color="error" elevation="0">
        <v-app-bar-title>{{ titleStore.getTitle() }}</v-app-bar-title>

        <template #append>
            <CartIcon />
        </template>
    </v-app-bar>
</template>

<script setup lang="ts">

    import { useTitleStore } from '~/store/title.store';

    const titleStore = useTitleStore()

</script>