import { useEffect, useState } from "react";
import { fetchCategorias } from "../services/productos.service";
import FormCategoria from "./form-categoria";
import { PiBroom } from "react-icons/pi";
import DeleteCategoria from "./admin-categoria-delete";

const initialValues = {
  id_categoria: 0,
  nombre: "",
};

export const AdminCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaPatch, setCategoriaPatch] = useState(initialValues);

  const fetchCategoriasAction = async () => {
    const { status, data } = await fetchCategorias();
    if (status === 200) setCategorias(data);
  };

  const handleClean = () => {
    setCategoriaPatch(initialValues);
  };

  useEffect(() => {
    fetchCategoriasAction();
  }, []);

  return (
    <div className="flex flex-row gap-4 font-rubik">
      <div className="flex flex-col gap-2">
        <div className="sticky top-2 flex flex-col gap-2 items-center">
          <FormCategoria
            getCategorias={fetchCategoriasAction}
            categoriaPatch={categoriaPatch}
            handleClean={handleClean}
          />
          {categoriaPatch?.nombre && (
            <button
              onClick={handleClean}
              className="!bg-primary w-full text-black flex flex-nowrap gap-1 justify-center items-center"
            >
              <PiBroom /> Limpiar formulario
            </button>
          )}
        </div>
      </div>
      <div className="p-2 flex flex-col gap-2 border rounded-md w-full">
        <p className="">Listado de categorías</p>
        <div className="gap-2 w-full border">
          <table className="border flex flex-col w-full">
            <thead>
              <tr className="grid grid-cols-2">
                <th className="capitalize">Nombre</th>
                <th className="capitalize">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {categorias.map((categoria, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-black" : ""
                  } grid grid-cols-2 hover:bg-primary hover:text-black items-center duration-200 min-w-fit`}
                >
                  <td className="capitalize px-2">{categoria.nombre}</td>
                  <td className="flex flex-nowrap gap-2 items-center justify-center">
                    <button className="text-white bg-blue-700 !p-1 hover:scale-105 duration-200" onClick={() => setCategoriaPatch(categoria)}>
                      Editar
                    </button>
                    <DeleteCategoria
                      id_categoria={categoria.id_categoria}
                      getCategorias={fetchCategoriasAction}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
