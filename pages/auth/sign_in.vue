<template>
    <v-container class="d-flex h-100">
        <v-row justify="center" align="center">
            <v-col cols="12" xl="6" lg="4" md="8">
                <v-card variant="flat">
                    <template #text>
                        <v-img src="/logo.jpg" width="130" class="mx-auto mb-6"></v-img>
                        
                        <AuthSignInForm @redirect="(value: boolean) => redirect(value)"/>

                        <v-btn block variant="text" class="mt-4">
                            ¿Olvidaste tu contraseña?
                        </v-btn>
                    </template>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">

    definePageMeta({ layout: 'guest', name: 'auth:sign_in' })

    useHead({ title: '👋 Iniciar sesión' })

    const route = useRoute()

    const redirect = (value: boolean): void => {
        
        if (value) {
            navigateTo({ name: 'dashboard' })
        }
    }

</script>