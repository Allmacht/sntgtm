<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <PurchasesList></PurchasesList>
            </v-col>
        </v-row>

        <PurchasesPurchaseDialog></PurchasesPurchaseDialog>
    </v-container>
</template>

<script lang="ts" setup>

import { useTitleStore } from '~/store/title.store';

const titleStore = useTitleStore()

definePageMeta({ name: 'purchases:index' })

onMounted((): string => titleStore.setTitle('Mis compras'))

</script>