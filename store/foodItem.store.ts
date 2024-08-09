import { defineStore } from "pinia";
import { ref } from "vue";

export const useFoodItemStore = defineStore("foodItem", () => {

    const item = ref<food>({} as food) 

    const showDialog = ref<boolean>(false)

    return { item, showDialog }
})