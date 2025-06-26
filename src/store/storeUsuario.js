import { create } from "zustand";
import { persist } from "zustand/middleware";

const userStore = create(
  persist(
    (set, get) => ({
      usuario: [],

      getUsuario: () => get().usuario,

      login: (user) => {
        set({ usuario: user });
      },

      logOut: () => {
        set({ usuario: [] });
      },
    }),
    {
      name: "usuario-powerhouse-storage",
      getStorage: () => localStorage,
    }
  )
);

export default userStore;
