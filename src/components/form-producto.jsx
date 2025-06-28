import axios from "axios";
import { useEffect, useRef } from "react";
import { toast } from 'react-toastify';

//Aqui traemos categorias/imagenes/descuentos de la base de datos, para poder elegirlos al momento de crear/editar un producto, hacemos un select para la eleccion de cada uno.
//getProductos es para ejecutar la llamada a los productos de nuestra DB y la ejecutamos en caso de creacion/edicion exitosa
export default function FormProducto({ productoPut, categorias, imagenes, descuentos, getProductos, handleClean }) {
  //Creamos una referencia al formulario con useRef
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Creamos el objeto que vamos a enviar a la DB para su creacion/edicion
    const producto = {
      id_producto: productoPut?.id_producto,
      nombre: e.target.nombre.value,
      precio: e.target.precio.value,
      stock: e.target.stock.value,
      categoria: e.target.categoria.value,
      descuento: e.target.descuento.value,
      imagen: e.target.imagen.value,
      descripcion: e.target.descripcion.value,
    }
    //En caso de que no se haya elegido alguna categoria/descuento/imagen, no se puede avanzar con el submit y se da una alerta de que estan faltando campos para seleccionar
    if(producto.categoria === '0') return toast.error('Debe seleccionar una categoria')
    if(producto.descuento === '0') return toast.error('Debe seleccionar un descuento')
    if(producto.imagen === '0') return toast.error('Debe seleccionar una imagen')
    try {
      //Creacion del producto con su mensaje informando al usuario en caso de exito/fallo
      if(producto.id_producto === 0) {
        const {data} = await axios.post(`${import.meta.env.VITE_BACK}/productos`, producto)

        if(data.status === 201) {
          toast.success(data.message || 'Producto agregado con éxito')
          //Reseteamos el formulario
          formRef.current.reset()
          //Como los productos cambiaron, debo actualizar los productos que tenemos en nuestro frontend
          getProductos()
          //Limpiamos el formulario
          handleClean()
        } else {
          toast.error(data?.message || "Error al agregar producto")
        }
      } else {
        //Edicion del producto con su mensaje informando al usuario en caso de exito/fallo
        const {data} = await axios.patch(`${import.meta.env.VITE_BACK}/productos/${producto.id_producto}`, producto)
        //Debemos informar si hubbo alguna fila afectada para confirmar que el producto se modificó
        if(data.status === 200 && data.data.affectedRows === 1) {
          toast.success(data.message || 'Producto editado con éxito')
          //Reseteamos el formulario
          formRef.current.reset()
          //Como los productos cambiaron, debo actualizar los productos que tenemos en nuestro frontend
          getProductos()
          //Limpiamos el formulario
          handleClean()
        } else {
          toast.error(data?.message || "Error al editar producto")
        }
      }
    }
    catch (error) {
      console.log(error);
      toast.error('Error en la creacion del producto')
    }
  };

  //Cada vez que cambia el valor del producto a editar o crear le asignamos al formulario un nuevo valor para poder manejar la edicion o creacion
  useEffect(() => {
    //Si el id_producto es !== 0, entonces estamos en la edicion de un producto
    if (productoPut?.id_producto !== 0) {
      formRef.current.nombre.value = productoPut.nombre;
      formRef.current.precio.value = productoPut.precio;
      formRef.current.stock.value = productoPut.stock;
      formRef.current.categoria.value = productoPut.id_categoria;
      formRef.current.descuento.value = productoPut.id_descuento;
      formRef.current.imagen.value = productoPut.id_imagen;
      formRef.current.descripcion.value = productoPut.descripcion;
    } else {
      //Si el id_producto es === 0, entonces estamos en la creacion de un producto
      formRef.current.nombre.value = "";
      formRef.current.precio.value = null;
      formRef.current.stock.value = null;
      formRef.current.categoria.value = 0;
      formRef.current.descuento.value = 0;
      formRef.current.imagen.value = 0;
      formRef.current.descripcion.value = "";
    }
  }, [productoPut]);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 border min-w-[264px] max-w-full rounded-md h-fit p-4"
    >
      <p className="text-center font-semibold">
        {productoPut?.id_producto !== 0 ? "Editar producto" : "Agregar Producto"}
      </p>
      {productoPut?.nombre && <p className="-my-1 font-semibold text-sm text-primary text-center">{productoPut?.nombre}</p>}
      <label className="flex flex-col">
        <span className="capitalize">nombre</span>
        <input
          type="text"
          required
          minLength={2}
          maxLength={80}
          name="nombre"
          placeholder="nombre"
          className="p-1 border rounded-md placeholder:opacity-50"
        />
      </label>
      <label className="flex flex-col">
        <span className="capitalize">precio</span>
        <input
          type="number"
          required
          min={1}
          max={899999}
          name="precio"
          placeholder="precio"
          className="p-1 border rounded-md placeholder:opacity-50"
        />
      </label>

        <label className="flex flex-col">
          <span className="capitalize">stock</span>
          <input
            type="number"
            required
            name="stock"
            placeholder="stock"
            min={0}
            className="p-1 border rounded-md placeholder:opacity-50"
          />
        </label>

      <label className="flex flex-col">
        <span className="capitalize">categoria</span>
        <select
          name="categoria"
          id="categoria"
          className="p-1 border rounded-md placeholder:opacity-50 capitalize"
        >
          <option value={0} className="text-black">
            Elegir
          </option>
          {categorias?.map((categoria, index) => 
            <option key={index} value={categoria.id_categoria} className="text-black capitalize">
              {categoria.nombre}
            </option>
          
          )}
          
        </select>
      </label>
      <label className="flex flex-col">
        <span className="capitalize">Descuento</span>
        <select
          name="descuento"
          id="descuento"
          className="p-1 border rounded-md placeholder:opacity-50"
        >
          <option value={0} className="text-black">
            Elegir
          </option>
          {descuentos?.map((descuento, index) => 
            <option key={index} value={descuento.id_descuento} className="text-black">
              {descuento.porcentaje}% - {descuento.motivo}
            </option>
          )}
        </select>
      </label>
      <label className="flex flex-col">
        <span className="capitalize">imagen</span>
        <select name="imagen" className="p-1 border rounded-md capitalize">
          <option value={0} className="text-black">
            Elegir
          </option>
          {imagenes?.map((imagen, index) => 
            <option key={index} value={imagen.id_imagen} className="text-black capitalize">
              {imagen.nombre}
            </option>
          )}
        </select>
      </label>

      <label className="flex flex-col">
        <span className="capitalize">descripcion</span>
        <textarea
          required
          name="descripcion"
          id="descripcion"
          rows={4}
          minLength={2}
          maxLength={1600}
          placeholder="Descripción"
          className="p-1 border rounded-md placeholder:opacity-50"
        />
      </label>
      <button type="submit" className="mt-2 !text-primary !bg-black-custom hover:!bg-primary hover:!text-black duration-200">
        {productoPut?.id_producto !== 0  ? "Editar producto" : "Agregar Producto"}
      </button>
    </form>
  );
}
