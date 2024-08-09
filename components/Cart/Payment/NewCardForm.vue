<template>
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
        <template #activator="{ props: ActivatorProps }">
            <v-btn v-bind="ActivatorProps" variant="text" color="primary">
                <v-icon icon="mdi-plus" start></v-icon>
                Agregar nueva tarjeta
            </v-btn>
        </template>

        <v-card>
            <v-toolbar color="error">
                <v-toolbar-title>Nueva tarjeta</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon="mdi-close" @click="dialog = false"></v-btn>
            </v-toolbar>

            <v-card-text>
                <v-form>
                    <v-text-field v-model="new_card.number" variant="solo" label="Número de tarjeta" v-maska="'#### #### #### ####'">
                        <template #append-inner>
                            <v-img v-if="new_card.type != ''" :src=" new_card.type == 'VISA' ? '/visa.png' : '/mastercard.png'" width="40"></v-img>
                            <v-icon v-else icon="mdi-credit-card-outline"></v-icon>
                        </template>
                    </v-text-field>
                    <v-text-field v-model="new_card.expiration_date" variant="solo" label="Fecha de expiración" v-maska="'##/##'"></v-text-field>
                    <v-text-field v-model="new_card.cvv" variant="solo" label="CVV" v-maska="'###'"></v-text-field>
                    <v-text-field v-model="new_card.name" variant="solo" label="Nombre en la tarjeta"></v-text-field>
                    <v-text-field v-model="new_card.alias" variant="solo" label="Alías"></v-text-field>

                    <v-btn block size="large" color="primary" type="submit" variant="text">
                        Agregar tarjeta
                    </v-btn>
                </v-form>
            </v-card-text>
            </v-card>
        </v-dialog>
</template>

<script lang="ts" setup>

    const dialog = ref<boolean>(false)

    const new_card = ref({
        number: '',
        type: '',
        expiration_date: '',
        cvv: '',
        name: '',
        alias: ''
    })

    watch(() => new_card.value.number, (value: string): void => {
        
        if(value.startsWith('4')) {
            new_card.value.type = 'VISA'
            return
        } else if(value.startsWith('5') || value.startsWith('2')) {
            new_card.value.type = 'MASTERCARD'
            return
        }

        new_card.value.type = ''
    })

</script>