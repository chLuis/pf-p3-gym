import axios from "axios";

export async function getSocios() {
    try{
      const {data} = await axios.get(`${import.meta.env.VITE_BACK}/socios`)
      return data
    } catch (error) {
      console.log(error);
      return []
    }
  }