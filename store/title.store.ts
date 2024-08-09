import { defineStore } from "pinia";
import { ref } from "vue";

export const useTitleStore = defineStore("title", () => {

    const title = ref<string>("");

    const showCartIcon = ref<boolean>(true);

    const setTitle = (value: string): string => title.value = value;

    const setShowCartIcon = (value: boolean): boolean => showCartIcon.value = value;
    
    const getShowCartIcon = (): ComputedRef<boolean> => computed((): boolean => showCartIcon.value);

    const getTitle = (): ComputedRef<string> => computed((): string => title.value);

    return { title,showCartIcon, setTitle, getTitle, setShowCartIcon, getShowCartIcon };
})