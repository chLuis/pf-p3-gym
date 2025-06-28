import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { toast } from "react-toastify"
import userStore from "../store/storeUsuario";

export default function FormVenta({ventaPatch, getVentas, cleanForm, productos}) {
  const formRef = useRef(null)
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const usuario = userStore(state => state.getUsuario())

  const handleProductoChange = (e) => {
    const idSeleccionado = parseInt(e.target.value);
    const producto = productos.find(p => p.id_producto === idSeleccionado);
    setProductoSeleccionado(producto || null);
  };



  const handleSubmit = async (e) => {
    e.preventDefault()

    const venta = {
      id_venta: ventaPatch?.id_venta || 0,
      id_usuario: usuario.user_id,
      id_producto: parseInt(e.target.id_producto.value),
      cantidad: parseInt(e.target.cantidad.value),
      monto: parseInt(e.target.monto.value),
    }
    if(venta.id_producto === 0) return toast.error('Debe seleccionar un producto')
    //socio.id_socio = ventaPatch.id_socio
    try {
      //El id_socio = 0 es para el caso de creacion, para cualquier otro será edición del socio
      if(venta.id_venta === 0) {
        const {data} = await axios.post(`${import.meta.env.VITE_BACK}/ventas`, venta)
        if (data.status === 201) {
          toast.success("Venta agregado con éxito")
          getVentas()
          formRef.current.reset()
        } else {
          toast.error(data?.data?.message || "Error al agregar socio")
        }
      } else {
        const {data} = await axios.patch(`${import.meta.env.VITE_BACK}/ventas/${venta.id_venta}`, venta)
        if(data.status === 200) {
          toast.success(data?.message || "Socio editado con éxito")
          getVentas()
          cleanForm()
        } else {
          toast.error(data?.data?.message || "Error al editar socio")
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (ventaPatch?.id_venta !== 0) {
      formRef.current.id_producto.value = ventaPatch.id_producto;
      formRef.current.cantidad.value = ventaPatch.cantidad;
      formRef.current.monto.value = ventaPatch.monto;
      
    } else {
      formRef.current.id_producto.value = 0;
      formRef.current.cantidad.value = null;
      formRef.current.monto.value = null;
      
    }
    }, [ventaPatch]);


  return (
    <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-2 border h-fit p-4 rounded-md w-full'>
      <p className="text-center font-semibold">{ventaPatch?.id_venta !== 0 ? "Editar venta" : "Agregar venta"}</p>
      {/* {ventaPatch?.id_venta && <p className="-my-1 font-semibold text-sm text-primary text-center">----</p>} */}
      <label>
        <span>Producto</span>
        <select name="id_producto" defaultValue={ventaPatch.id_producto} onChange={handleProductoChange} className="p-1 border rounded-md placeholder:opacity-50 max-w-[350px]">
          <option value={0}>Elegir</option>
          {productos?.map((producto, index) => 
            <option key={index} value={producto.id_producto} className="text-black capitalize max-w-[350px] truncate">{producto.nombre}</option>
          ) }
        </select>
        
      </label>
      <label>
        <span>Cantidad</span>
        <input type="number" required name="cantidad" id="cantidad" max={productoSeleccionado?.stock || 1} className='p-1 border rounded-md placeholder:opacity-50 w-full'/>
      </label>
      <label>
        <span>Monto</span>
        <input type="number" required name="monto"  id="monto" className='p-1 border rounded-md placeholder:opacity-50 w-full'/>
      </label>
      
      <button className="mt-2 !text-primary !bg-black-custom hover:!bg-primary hover:!text-black duration-200">{ventaPatch?.id_venta !== 0 ? "Editar venta" : "Agregar venta"}</button>
    </form>
  )
}