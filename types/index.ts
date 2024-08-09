export {}

declare global {

    interface credentials {
        username: string,
        password: string
    }

    interface food {
        id: number,
        title: string,
        price: number,
        description: string,
        image: string
    }

    interface cart {
        id: string,
        total: number,
        items: cartItem[]
    }

    interface cartItem {
        id: string,
        food: food,
        quantity: number,
        total: number
    }

    interface Card {
        id: string,
        name: string,
        type: string
    }

    interface purchase {
        id: string,
        total: number,
        items: cartItem[],
        items_count: number,
        date: string,
        qr: string,
        approved: boolean
    }
}