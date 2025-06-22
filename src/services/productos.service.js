import axios from "axios";

export const fetchProductos = async () => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_BACK}/productos/`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategorias = async () => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_BACK}/productos/categorias/`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
