<template>
    <v-bottom-sheet v-model="dialog">
        <v-card class="rounded-t-xl pb-5" v-if="purchaseStore.purchase">
            <v-toolbar absolute color="transparent">
                <template #append>
                    <v-btn icon="mdi-close" variant="flat" @click="dialog = false"></v-btn>
                </template>
            </v-toolbar>
            <v-card-text>
                <v-img class="mx-auto mt-6" :src="purchaseStore.purchase.qr" width="300" height="300">
                    <template v-slot:placeholder>
                        <div class="d-flex align-center justify-center fill-height">
                            <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                        </div>
                    </template>
                </v-img>
            </v-card-text>

            <v-list>
                <v-list-item title="Ver productos" prepend-icon="mdi-store"></v-list-item>
                <v-list-item title="Volver a realizar compra" prepend-icon="mdi-reload"></v-list-item>
                <v-list-item title="Comprobante de compra" prepend-icon="mdi-file"></v-list-item>
            </v-list>
        </v-card>
    </v-bottom-sheet>
</template>

<script lang="ts" setup>

    import { usePurchaseStore } from '~/store/purchase.store';

    const purchaseStore = usePurchaseStore()

    const dialog = ref<boolean>(false)

    watch((): boolean => purchaseStore.showDialog, (value: boolean): void => {
        
        dialog.value = value
    })

    watch(dialog, (value: boolean): void => {
        purchaseStore.showDialog = value
    })

</script>