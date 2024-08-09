<template>
    <v-dialog persistent>

        <template #activator="{ props: ActivatorProps }">
            <v-btn v-bind="ActivatorProps" color="error" variant="tonal" size="small">Eliminar</v-btn>
        </template>
        
        <template #default="{ isActive }">
            <v-card title="Atención">
                <v-card-text>¿Deseas eliminar este elemento del carrito?</v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="isActive.value = false">Cancelar</v-btn>
                    <v-btn color="error" @click="props.callback()">Eliminar</v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script setup lang="ts">

    const props = defineProps({
        callback: {
            type: Function,
            required: true
        }
    })

</script>