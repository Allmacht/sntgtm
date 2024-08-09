<template>
    <v-container>
        asdasd
    </v-container>
</template>

<script setup lang="ts">

    import { useTitleStore } from '~/store/title.store';

    const titleStore = useTitleStore()

    definePageMeta({ name: 'dashboard' })

    onMounted((): string => titleStore.setTitle('Inicio'))

</script>