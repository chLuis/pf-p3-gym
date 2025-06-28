import axios from "axios";

export const fetchVentas = async () => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_BACK}/ventas`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
