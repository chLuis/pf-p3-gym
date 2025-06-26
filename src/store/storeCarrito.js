import { create } from "zustand";
import { persist } from "zustand/middleware";

const carritoStore = create(
    persist(
        (set, get) => ({
            carrito: [],

            getCarrito: () => get().carrito,

            agregarProducto: (producto) => {
            const carritoActual = get().carrito;

            const yaExiste = carritoActual.some(p => p === producto);
                if (!yaExiste) {
                    set({ carrito: [...carritoActual, producto] });
                }
            },

            eliminarProducto: (id_producto) => {
                const nuevoCarrito = get().carrito.filter(p => p !== id_producto);
                set({ carrito: nuevoCarrito });
            },

            vaciarCarrito: () => set({ carrito: [] }),
    }),
            {
                name: "carrito-storage",
                getStorage: () => localStorage,
            }
        )
    );

export default carritoStore;