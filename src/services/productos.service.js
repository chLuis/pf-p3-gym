import axios from "axios";

export const fetchProductos = async () => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_BACK}/productos/`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchProductoUnico = async (id) => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_BACK}/productos/producto-detalle/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const fetchCategorias = async () => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_BACK}/productos/categorias/`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchImagenes = async () => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_BACK}/productos/imagenes/`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDescuentos = async () => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_BACK}/productos/descuentos/`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
