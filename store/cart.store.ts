import { defineStore } from "pinia";
import { v4 as uuidv4 } from 'uuid';


export const useCartStore = defineStore("cart", () => {

    const cart = ref<cart>()

    const phase = ref<number>()

    const addItem = (item: cartItem): void => {
        if (!cart.value) {
            cart.value = {
                id: uuidv4(),
                total: 0,
                items: [] as cartItem[]
            };
        }

        const existingItem = cart.value.items.find((i: cartItem) => i.food.id === item.food.id);

        if (existingItem) {
            existingItem.quantity += item.quantity;
            existingItem.total = existingItem.quantity * existingItem.food.price;
        } else {
            cart.value.items.push(item);
        }

        cart.value.total += item.total;
    }

    const removeItem = (item: cartItem): void => {
        cart.value!.total -= item.total;
        cart.value!.items = cart.value!.items.filter((i: cartItem) => i !== item);
    }

    const clearCart = (): void => {
        cart.value = undefined
    }

    const countProducts = (): number => {
        if(!cart.value || !cart.value.items) return 0;
        return cart.value.items.reduce((total: number, item: cartItem) => total + item.quantity, 0)
    }

    return { cart, phase, addItem, removeItem, clearCart, countProducts }
}, {
    persist: true
})