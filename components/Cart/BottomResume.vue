<template>
    <v-app-bar location="bottom" fixed height="110" class="pb-5" v-if="cartStore.cart !== undefined && cartStore.cart.items.length > 0">
        <v-card width="100vw" variant="flat" :loading="loading">
            <v-card-text class="pb-0">
                <v-row justify="space-between">
                    <v-col cols="6" style="font-size: 20px;" class="text-left">Total</v-col>
                    <v-col cols="6" style="font-size: 20px;" class="text-right">
                        MX ${{ cartStore.cart?.total }}
                    </v-col>
                </v-row>
            </v-card-text>

            <v-card-actions>
                <v-btn block color="black" variant="flat" size="large" @click="next_step(cartStore.phase)" :loading="loading">
                    <span v-if ="cartStore.phase != undefined && cartStore.phase < 1">Continuar compra</span>
                    <span v-else>Finalizar compra</span>

                    <template #loader>
                        <v-progress-circular indeterminate></v-progress-circular>
                        <span class="ml-2">Espere...</span>
                    </template>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-app-bar>
</template>

<script setup lang="ts">

    import { useCartStore } from '~/store/cart.store';

    const cartStore = useCartStore()

    const router = useRouter()

    const loading = ref<boolean>(false)

    const emits = defineEmits<{ notification: [success: boolean] }>()

    watch(() => cartStore.phase, (val: number | undefined) => {
        if (val !== undefined && val < 1) {
            loading.value = false
        }
    })

    const next_step = (phase: number | undefined): void => {

        if (phase !== undefined && phase < 1) {
            cartStore.phase = 1
            router.push({ name: 'cart:payment' })
            return
        }

        cartStore.phase = 3
        loading.value = true

        cartStore.cart = undefined

        emits('notification', true)

        loading.value = false
    }

</script>