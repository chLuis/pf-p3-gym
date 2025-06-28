import axios from "axios";

export const fetchUsuarios = async () => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_BACK}/usuarios`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
