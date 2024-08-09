<template>
    <v-list-item @click="showDescription()">

        <v-list-item-title v-text="props.food.title"></v-list-item-title>

        <v-list-item-subtitle class="mb-1">
            <span class="font-weight-black">MX ${{ props.food.price }}</span>
        </v-list-item-subtitle>

        <v-list-item-subtitle v-text="props.food.description"></v-list-item-subtitle>

        <template #append>
            <v-img :src="$props.food.image" width="80" height="80"></v-img>
        </template>
        
    </v-list-item>
</template>

<script setup lang="ts">

    import { useFoodItemStore } from '~/store/foodItem.store';

    const foodItemStore = useFoodItemStore()

    const props = defineProps({
        food: {
            type: Object as () => food,
            required: true
        }
    })

    const showDescription = (): void => {
        foodItemStore.showDialog = true
        foodItemStore.item = props.food
    }

</script>