import { create } from "zustand";
import { persist } from "zustand/middleware";

const carritoStore = create(
    persist(
        (set, get) => ({
            carrito: [],

            getCarrito: () => get().carrito,

            agregarProducto: (id_producto) => {
            const carritoActual = get().carrito;

            const yaExiste = carritoActual.some(p => p === id_producto);
                if (!yaExiste) {
                    set({ carrito: [...carritoActual, id_producto] });
                }
            },

            eliminarProducto: (id_producto) => {
                const nuevoCarrito = get().carrito.filter(p => p !== id_producto);
                set({ carrito: nuevoCarrito });
            },

            vaciarCarrito: () => set({ carrito: [] }),

            syncCarrito: () => {
                const storedState = JSON.parse(localStorage.getItem("carrito-storage"));
                if (storedState) {
                    set({ carrito: storedState.state.carrito });
                }
            }
        }),
        {
            name: "carrito-storage",
            getStorage: () => localStorage,
        }
    )
);

export default carritoStore;

//para actualizar el carrito si esta en diferentes ventanas
if (typeof window !== "undefined") {
    window.addEventListener("storage", (event) => {
    if (event.key === "carrito-storage") {
        //llama a la funcion creada en el store para sincronizar los carritos en todas las ventanas
        carritoStore.getState().syncCarrito();
    }
  });
}