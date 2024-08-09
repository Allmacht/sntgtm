<template>
    <v-btn icon :to="{ name: 'cart' }">
        <v-badge v-if="cartStore.countProducts() > 0" color="success" :content="cartStore.countProducts()">
            <v-icon icon="mdi-cart-outline"></v-icon>
        </v-badge>

        <v-icon v-else icon="mdi-cart-outline"></v-icon>
    </v-btn>
</template>

<script setup lang="ts">

    import { useCartStore } from '~/store/cart.store';
    
    const cartStore = useCartStore()

</script>