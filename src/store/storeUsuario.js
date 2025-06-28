import { create } from "zustand";
import { persist } from "zustand/middleware";

const userStore = create(
  persist(
    (set, get) => ({
      usuario: [],

      getUsuario: () => get().usuario,

      getRol: () => get().usuario.user_rol,

      login: (user) => {
        set({ usuario: user });
      },

      logOut: () => {
        set({ usuario: [] });
      },

      syncUsuario: () => {
      const storedState = JSON.parse(localStorage.getItem("usuario-powerhouse-storage"));
      if (storedState) {
          set({ usuario: storedState.state.usuario });
      }
  }
    }),
    {
      name: "usuario-powerhouse-storage",
      getStorage: () => localStorage,
    }
  )
);

export default userStore;

//para actualizar el usuario si esta en diferentes ventanas
if (typeof window !== "undefined") {
    window.addEventListener("storage", (event) => {
    if (event.key === "usuario-powerhouse-storage") {
        //llama a la funcion creada en el store para sincronizar el usuario en todas las ventanas
        userStore.getState().syncUsuario();
    }
  });
}