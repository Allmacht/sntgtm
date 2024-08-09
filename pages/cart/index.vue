<template>
    <v-container class="flex-container">
        <v-row>
            <v-col cols="12">
                <CartList :cart="cartStore.cart"/>
            </v-col>
        </v-row>
    </v-container>
</template>
    
<script setup lang="ts">

    import { useTitleStore } from '~/store/title.store';

    import { useCartStore } from '~/store/cart.store';

    const titleStore = useTitleStore()

    const cartStore = useCartStore()

    definePageMeta({ layout: 'cart', name: 'cart' })

    onMounted(() => {
        titleStore.setShowCartIcon(true)
        titleStore.setTitle('Carrito de compras')
        
        cartStore.phase = 0
    })

</script>

<style lang="scss">

    .flex-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 100px;
    }
    
</style>