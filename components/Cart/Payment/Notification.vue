<template>
    <v-bottom-sheet v-model="handle" >
        <v-sheet color="white" class="rounded-t-xl">
           
            <v-empty-state
                v-if="success"
                title="¡Gracias por su compra!"
                text="Agradecemos su compra. No olvide mostrar el código QR en el mostrador."
                icon="mdi-check-circle-outline"
                color="success"
            >
                <v-btn block color="primary" variant="text" :to="{ name: 'purchases:index' }">
                    Ir a mis compras
                </v-btn>
            </v-empty-state>

            <v-empty-state
                v-else
                title="Ups, algo salio mal"
                text="Lo sentimos, su pago no pudo completarse correctamente. Por favor, intente nuevamente."
                icon="mdi-close-circle-outline"
                color="error"
            >
                <v-btn block color="primary" variant="text" @click="handle = false">
                    Cerrar
                </v-btn>
            </v-empty-state>
           
        </v-sheet>
        
    </v-bottom-sheet>
</template>

<script lang="ts" setup>

    const props = defineProps({
        success: {
            type: Boolean,
            default: false
        },

        show: {
            type: Boolean,
            default: false
        }
    })

    const handle = computed({
        get: () => props.show,
        set: () => false
    })

</script>