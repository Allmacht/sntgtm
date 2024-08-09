<template>
    <v-list-item lines="three" @click="show_purchase(props.purchase)">
        <v-list-item-title>Compra realizada</v-list-item-title>
        <v-list-item-subtitle>{{ props.purchase.date }}</v-list-item-subtitle>
        <v-list-item-subtitle class="mb-1 mt-3">total de productos: {{ props.purchase.items_count }}</v-list-item-subtitle>
        
        <template v-slot:append>
            <v-row no-gutters class="pa-0 text-right">
                <v-col cols="12" class="pa-0">
                    MX ${{ props.purchase.total }}
                </v-col>
                <v-col cols="12" class="pa-0 mt-3">
                    <v-chip :color="props.purchase.approved ? 'success' : 'warning'" size="small">
                        {{ props.purchase.approved ? 'Aprobada' : 'Pendiente' }}
                    </v-chip>
                </v-col>
            </v-row>
        </template>
    </v-list-item>
</template>

<script lang="ts" setup>

    import { usePurchaseStore } from '~/store/purchase.store';

    const props = defineProps({
        purchase: {
            type: Object as () => purchase,
            required: true
        }
    })

    const purchaseStore = usePurchaseStore()

    const show_purchase = (purchase: purchase): void => {
        
        purchaseStore.purchase = purchase
        purchaseStore.showDialog = true
    }

</script>