<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <v-expansion-panels variant="popout" mandatory="force">
                    <v-expansion-panel title="Tarjeta de Crédito / Débito" >
                        <v-expansion-panel-text class="px-0">
                            <CartPaymentCard></CartPaymentCard>
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expansion-panel title="Transferencia">
                        <v-expansion-panel-text>
                            <CartPaymentTransfer></CartPaymentTransfer>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">

    import { useTitleStore } from '~/store/title.store';

    import { useCartStore } from '~/store/cart.store';

    definePageMeta({ layout: 'cart', name: 'cart:payment' })

    const titleStore = useTitleStore()

    const cartStore = useCartStore()

    onMounted(() => {
        titleStore.setShowCartIcon(false)
        titleStore.setTitle('Forma de pago')

        cartStore.phase = 1
    })
</script>