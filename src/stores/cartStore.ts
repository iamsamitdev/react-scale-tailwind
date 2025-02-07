import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product, CartItem } from '@/types/product'

interface CartStore {
    items: CartItem[]
    addItem: (item: Product) => void
    removeItem: (id: number) => void
}

export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
            items: [],
            addItem: (item:any) => set((state) => {
                const index = state.items.findIndex((i:any) => i.id === item.id)
                if (index !== -1) {
                    state.items[index].quantity += 1
                    return { items: [...state.items] }
                }
                return { items: [...state.items, { ...item, quantity: 1 }] }
            }),
            removeItem: (id) => set((state) => {
                const index = state.items.findIndex((i:any) => i.id === id)
                if (index !== -1) {
                    state.items.splice(index, 1)
                    return { items: [...state.items] }
                }
                return { items: [...state.items] }
            })
        }),
        {
            name: 'cart-store',
        }
    )
)