<template>
    <v-list>
        <v-empty-state v-if="purchases === undefined || purchases?.length === 0"
        icon="mdi-storefront-outline"
        title="No hay compras"
        text="No hay compras realizadas"
        ></v-empty-state>

        <PurchasesListItem 
            v-else
            v-for="purchase in purchases"
            :key="purchase.id"
            :purchase="purchase"
        ></PurchasesListItem>
    </v-list>
</template>

<script lang="ts" setup>

    const purchases = ref<purchase[]>(
        [
            {
                id: "1",
                total: 340.00,
                items: [],
                items_count: 0,
                date: "2022-01-01",
                qr: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=7b0db04b-4462-4008-9382-321f764692b0",
                approved: true
            }
        ]
    )

</script>