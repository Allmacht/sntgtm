<template>
    <div>
        <FoodAppBar />

        <v-container>
            <FoodList />
        </v-container>

        <FoodDialogDescription @notification="(text: string) => showSnackbar(text)"/>
        
        <v-snackbar v-model="snackbar" timeout="2500" color="success">
            {{ snackbar_text }}
        </v-snackbar>
    </div>
</template>

<script setup lang="ts">

    import { useTitleStore } from '~/store/title.store';

    const titleStore = useTitleStore()

    definePageMeta({ name: 'food:index' })

    onMounted((): string => titleStore.setTitle('Menú'))

    const snackbar = ref<boolean>(false)

    const snackbar_text = ref<string>('')

    const showSnackbar = (text: string): void => {
        snackbar_text.value = text
        snackbar.value = true
    }

</script>