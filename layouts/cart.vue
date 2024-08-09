<template>
    <v-app>
        <CartAppBar />
        
        <v-main>
            <slot />
        </v-main>

        <CartPaymentNotification :success="payment_success" :show="show_notification_handle"></CartPaymentNotification>

        <CartBottomResume @notification="(success: boolean) => show_notification(success)"></CartBottomResume>
    </v-app>
</template>

<script setup lang="ts">


    const payment_success = ref<boolean>()

    const show_notification_handle = ref<boolean>(false)

    const show_notification = (success: boolean): void => {
        payment_success.value = success
        show_notification_handle.value = true
    }

</script>