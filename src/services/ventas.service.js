import axios from "axios";

export const fetchVentas = async () => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_BACK}/ventas`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchVentasDate = async (interval) => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_BACK}/ventas/${interval}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
