<template>
    <div class="px-0">
        <v-list class="px-0 py-0" color="primary">
            <v-list-item v-for="card in cards" :key="card.id" @click="selected(card)":active="selected_card?.id == card.id">

                <template #prepend>
                    <v-list-item-action start>
                        <v-img :src="card.type == 'VISA' ? '/visa.png' : '/mastercard.png'" width="45"></v-img>
                    </v-list-item-action>
                </template> 

                <v-list-item-title v-text="card.name"></v-list-item-title>

            </v-list-item>

            <v-divider class="mt-3"></v-divider>

            <v-list-item class="px-0 text-right mt-2">
                <v-list-item-title>
                    <CartPaymentNewCardForm></CartPaymentNewCardForm>
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </div>
</template>

<script lang="ts" setup>

    const selected_card = ref<Card>()

    const cards = ref<Card[]>([
        {
            id: "1",
            name:"************ 1234",
            type:"VISA"
        },
        {
            id: "2",
            name:"************ 4566",
            type:"MASTERCARD"
        },
        {
            id: "3",
            name:"************ 4566",
            type:"MASTERCARD"
        }
    ])

    const selected = (card: Card): void => {
        selected_card.value = card
    }

</script>