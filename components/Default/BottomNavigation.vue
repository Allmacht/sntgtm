<template>
    <v-bottom-navigation grow color="error" class="pb-5" height="80"> 
        <v-btn :to="{ name: 'dashboard' }">
            <v-icon icon="mdi-home-outline"></v-icon>
            <span>Inicio</span>
        </v-btn>
        <v-btn :to="{ name: 'food:index' }">
            <v-icon icon="mdi-food-apple-outline"></v-icon>
            <span>Menú</span>
        </v-btn>
        <v-btn :to="{ name: 'purchases:index' }">
            <v-icon icon="mdi-basket-outline"></v-icon>
            <span>Mis compras</span>
        </v-btn>
        <v-btn>
            <v-icon icon="mdi-menu"></v-icon>
            <span>Más</span>
        </v-btn>
    </v-bottom-navigation>
</template>

<script setup lang="ts">

</script>