<template>
    <v-form :disabled="loading" @submit.prevent="loginRequest(credentials)">
        <v-text-field
            v-model="credentials.username"
            variant="solo"
            label="Número de nomina"
            name="username"
            focused
        ></v-text-field>

        <v-text-field 
            v-model="credentials.password" 
            variant="solo"
            label="Contraseña"
            name="password"
            :type="show ? 'text' : 'password'"
            :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="show = !show"
            focused
        ></v-text-field>

        <v-btn type="submit" block size="large" rounded="0" color="error" :loading="loading">
            Entrar
        </v-btn>
    </v-form>
</template>

<script setup lang="ts">

    const emits = defineEmits<{ redirect:[value: boolean] }>()

    const credentials = ref<credentials>({
        username: '',
        password: ''
    })

    const show = ref<boolean>(false)
    const loading = ref<boolean>(false)

    const loginRequest = ({username, password}: credentials): void => {
        
        emits('redirect', true)
    }

</script>