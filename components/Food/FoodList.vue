<template>
    <v-list lines="three">
        <template v-if="foods.length === 0">
            <v-list-item>
                <v-list-item-title class="text-center text-disabled">
                    No hay resultados
                </v-list-item-title>
            </v-list-item>
        </template>
        <FoodItem v-else v-for="food in foods" :key="food.title" :food="food"></FoodItem>
    </v-list>
</template>

<script setup lang="ts">

    const foods = ref<food[]>([
        {
            id: 1,
            title:"Comida 1",
            description:"lorem ipsum dolor sit amet consectetur adipiscing elit",
            price:45,
            image:"/food.png",
        },
        {
            id: 2,
            title:"Comida 2",
            description:"lorem ipsum dolor sit amet consectetur adipiscing elit",
            price:45,
            image:"/hotdog.webp",
        },
        {
            id: 3,
            title:"Bebida 1",
            description:"lorem ipsum dolor sit amet consectetur adipiscing elit",
            price:45,
            image:"/coca.webp",
        }
    ])

</script>