import { defineStore } from "pinia";
import { ref } from "vue";


export const usePurchaseStore = defineStore("purchase", () => {

    const purchases = ref<purchase[]>([])

    const purchase = ref<purchase>()

    const showDialog = ref<boolean>(false)

    return {
        purchases,
        purchase,
        showDialog
    }
})