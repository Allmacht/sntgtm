<template>
    <div>
        <v-empty-state v-if="cart === undefined || cart?.items.length === 0"
        icon="mdi-cart-off"
        title="Carrito vacío"
        text="Comience a agregar elementos al carrito"
        ></v-empty-state>

        <CartListItem
            v-else
            v-for="item in cart?.items" :key="item.id" 
            :item="item"
            @remove="(item: cartItem) => removeItem(item)"
        ></CartListItem>
    </div>
</template>

<script setup lang="ts">

    const props = defineProps({
        cart: {
            type: Object as () => cart | undefined,
            required: true
        }
    })

    const removeItem = (item: cartItem): void => {
        props.cart!.total -= item.total;
        props.cart!.items = props.cart!.items.filter((i: cartItem) => i !== item);
    }

</script>