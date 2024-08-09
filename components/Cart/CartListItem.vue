<template>
    <v-card class="mb-2" height="130">
        <v-row>
            <v-col cols="8">
                <v-card-title class="text-h6 pb-0">
                    {{ props.item.food.title }}
                </v-card-title>

                <v-card-subtitle class="font-weight-bold">MX ${{ props.item.food.price }}</v-card-subtitle>
                <v-card-subtitle>{{ props.item.food.description }}</v-card-subtitle>

                <v-card-actions>
                    <v-card-subtitle class="px-0 mx-2">Cantidad: {{ props.item.quantity }}</v-card-subtitle>
                    <v-spacer></v-spacer>
                    <CartRemoveItemDialog :callback="() => $emit('remove', props.item)"></CartRemoveItemDialog>
                </v-card-actions>
            </v-col>

            <v-col cols="4">
                <v-avatar class="mx-auto mt-4" rounded="0" size="100">
                    <v-img :src="props.item.food.image"></v-img>
                </v-avatar>
            </v-col>
        </v-row>
    </v-card>
</template>

<script setup lang="ts">

    const emits = defineEmits<{ remove: [item: cartItem] }>()

    const props = defineProps({
        item: {
            type: Object as () => cartItem,
            required: true
        }
    })

</script>