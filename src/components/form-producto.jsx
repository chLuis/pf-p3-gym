import { useEffect, useRef } from "react";

export default function FormProducto({producto}) {
  const formRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    console.log(data)
  }

  useEffect(() => {
    if (!formRef.current) return;
    formRef.current.reset();

    if (producto) {
      const form = formRef.current;
      form.nombre.value = producto.nombre || "";
      form.precio.value = producto.precio || "";
      form.stock.value = producto.stock || "";
      form.categoria.value = producto.categoria || "Categoria";
      form.marca.value = producto.marca || "Marca";
      form.imagen.value = producto.imagen || "Imagen";
      form.descripcion.value = producto.descripcion || "";
    }
  }, [producto]);

  
  return (
    <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-2 border min-w-[244px] rounded-md h-fit p-4'>
            <p className="text-center font-semibold">{producto?.id ? "Editar producto" : "Agregar Producto"}</p>
            <input type="text" required name="nombre" placeholder='nombre'  id="imagen" className='p-1 border rounded-md placeholder:opacity-50'/>
            <input type="number" required name="precio" placeholder='precio'  id="imagen" className='p-1 border rounded-md placeholder:opacity-50'/>
            <input type="number" required name="stock" placeholder='stock'  id="imagen" className='p-1 border rounded-md placeholder:opacity-50'/>
            <select name="categoria" id="categoria"  className='p-1 border rounded-md placeholder:opacity-50'>
              <option value="Categoria" disabled className='text-black'>Categoria</option>
              <option value="toallas" className='text-black'>Toallas</option>
              <option value="mancuernas" className='text-black'>Mancuernas</option>
              <option value="proteinas" className='text-black'>Proteinas</option>
              <option value="accesorios" className='text-black'>Accesorios</option>
              <option value="guantes" className='text-black'>Guantes</option>
            </select>
            <select name="marca" id="marca" className='p-1 border rounded-md placeholder:opacity-50'>
              <option value="Marca" disabled className='text-black'>Marca</option>
              <option value="nike" className='text-black'>Nike</option>
              <option value="adidas" className='text-black'>Adidas</option>
              <option value="puma" className='text-black'>Puma</option>
            </select>
            <select name="imagen" id="imagen" className='p-1 border rounded-md'>
              <option value="Marca" disabled className='text-black'>Imagen</option>
              <option value="img1" className='text-black'>img1</option>
              <option value="img2" className='text-black'>img2</option>
              <option value="img3" className='text-black'>img3</option>
            </select>
            <textarea name="descripcion" id="descripcion" rows={4} placeholder='Descripción'  className='p-1 border rounded-md placeholder:opacity-50'/>
            <button type="submit">{producto?.id ? "Editar producto" : "Agregar Producto"}</button>
          </form>
  )
}