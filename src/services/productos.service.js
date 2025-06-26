import axios from "axios";

export const fetchProductosRelacionados = async (categoriaId) => {
  const response = await axios.get(`${import.meta.env.VITE_BACK}/productos/relacionados/${categoriaId}`)
  return response.data
}

export const fetchProductos = async () => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_BACK}/productos/`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCarrito = async (car) => {
  const carrito = {
    carrito: car
  }
  try {
    const { data } = await axios.post(`${import.meta.env.VITE_BACK}/productos/carrito`, carrito);
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
