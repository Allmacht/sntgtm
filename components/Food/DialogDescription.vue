<template>
    <v-bottom-sheet v-model="dialog">
        <v-card class="rounded-t-xl pb-5">
            <v-img color="surface-variant" :src="foodItemStore.item?.image" height="150" cover>
                <v-toolbar color="transparent">
                    <template #append>
                        <v-btn icon="mdi-close" variant="flat" @click="dialog = false"></v-btn>
                    </template>
                </v-toolbar>
            </v-img>

            <v-card-text>
                <div class="font-weight-bold">{{ foodItemStore.item?.title }}</div>
                <div class="font-weight-bold">MX ${{ foodItemStore.item?.price }}</div>
                {{ foodItemStore.item?.description }}

                <v-divider class="mt-3"></v-divider>

                <v-row class="mt-2" align="center" justify="center">
                    <v-col>Cantidad</v-col>
                    <v-col>
                        <v-number-input
                            v-model="quantity"
                            variant="outlined"
                            controlVariant="split"
                            hide-details
                            density="compact"
                            :min="1"
                            :max="10"
                            inset
                            :disabled="loading"
                        >
                        </v-number-input>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-card-actions>
                <v-btn block color="black" variant="flat" size="large" @click="addItemToCart()">
                    {{ `Añadir ${quantity} al carrito $${foodItemStore.item?.price * quantity}` }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-bottom-sheet>
</template>

<script setup lang="ts">

    import { v4 as uuidv4 } from 'uuid';

    import { useFoodItemStore } from '~/store/foodItem.store';

    import { useCartStore } from '~/store/cart.store';

    const foodItemStore = useFoodItemStore()

    const cartStore = useCartStore()

    const emits = defineEmits<{ notification: [text: string] }>()

    const loading = ref<boolean>(false)

    const dialog = ref<boolean>(false)

    const quantity = ref<number>(1)

    watch((): boolean => foodItemStore.showDialog, (value: boolean): void => {
        dialog.value = value
    })

    watch(dialog, (value: boolean): void => {
        foodItemStore.showDialog = value
    })

    const addItemToCart = (): void => {

        loading.value = true

        const item: cartItem = {
            id: uuidv4(),
            food: foodItemStore.item!,
            total: foodItemStore.item!.price * quantity.value,
            quantity: quantity.value
        }

        cartStore.addItem(item)

        loading.value = dialog.value = false
        
        emits('notification', "Se añadó al carrito")
    }

</script>