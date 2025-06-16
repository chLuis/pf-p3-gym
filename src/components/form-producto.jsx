import { useEffect, useRef } from "react";

export default function FormProducto({ producto }) {
  const formRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  useEffect(() => {
    if (!formRef.current) return;
    formRef.current.reset();

    if (producto) {
      const form = formRef.current;
      form.nombre.value = producto.nombre || "";
      form.precio.value = producto.precio || "";
      form.stock.value = producto.stock || "";
      form.categoria.value = producto.categoria || "elegir";
      form.marca.value = producto.marca || "elegir";
      form.imagen.value = producto.imagen || "elegir";
      form.descuento.value = producto.descuento || "";
      form.descripcion.value = producto.descripcion || "";
    }
  }, [producto]);

  console.log(producto);
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 border min-w-[264px] max-w-full rounded-md h-fit p-4"
    >
      <p className="text-center font-semibold">
        {producto?.id ? "Editar producto" : "Agregar Producto"}
      </p>
      <label className="flex flex-col">
        <span className="capitalize">nombre</span>
        <input
          type="text"
          required
          name="nombre"
          placeholder="nombre"
          id="imagen"
          className="p-1 border rounded-md placeholder:opacity-50"
        />
      </label>
      <label className="flex flex-col">
        <span className="capitalize">precio</span>
        <input
          type="number"
          required
          name="precio"
          placeholder="precio"
          id="imagen"
          className="p-1 border rounded-md placeholder:opacity-50"
        />
      </label>
      <div className="grid grid-cols-2 gap-2">
        <label className="flex flex-col">
          <span className="capitalize">stock</span>
          <input
            type="number"
            required
            name="stock"
            placeholder="stock"
            id="imagen"
            className="p-1 border rounded-md placeholder:opacity-50"
          />
        </label>
        <label className="flex flex-col">
          <span className="capitalize">descuento</span>
          <input
            type="number"
            name="descuento"
            id="descuento"
            placeholder=""
            className="p-1 border rounded-md placeholder:opacity-50"
          />
        </label>
      </div>
      <label className="flex flex-col">
        <span className="capitalize">categoria</span>
        <select
          name="categoria"
          id="categoria"
          className="p-1 border rounded-md placeholder:opacity-50"
        >
          <option value="elegir" disabled className="text-black">
            Elegir
          </option>
          <option value="toallas" className="text-black">
            Toallas
          </option>
          <option value="mancuernas" className="text-black">
            Mancuernas
          </option>
          <option value="proteinas" className="text-black">
            Proteinas
          </option>
          <option value="accesorios" className="text-black">
            Accesorios
          </option>
          <option value="guantes" className="text-black">
            Guantes
          </option>
        </select>
      </label>
      <label className="flex flex-col">
        <span className="capitalize">marca</span>
        <select
          name="marca"
          id="marca"
          className="p-1 border rounded-md placeholder:opacity-50"
        >
          <option value="elegir" disabled className="text-black">
            Elegir
          </option>
          <option value="nike" className="text-black">
            Nike
          </option>
          <option value="adidas" className="text-black">
            Adidas
          </option>
          <option value="puma" className="text-black">
            Puma
          </option>
        </select>
      </label>
      <label className="flex flex-col">
        <span className="capitalize">imagen</span>
        <select name="imagen" id="imagen" className="p-1 border rounded-md">
          <option value="elegir" disabled className="text-black">
            Elegir
          </option>
          <option value="img1" className="text-black">
            img1
          </option>
          <option value="img2" className="text-black">
            img2
          </option>
          <option value="img3" className="text-black">
            img3
          </option>
        </select>
      </label>

      <label className="flex flex-col">
        <span className="capitalize">descripcion</span>
        <textarea
          name="descripcion"
          id="descripcion"
          rows={4}
          placeholder="Descripción"
          className="p-1 border rounded-md placeholder:opacity-50"
        />
      </label>
      <button type="submit">
        {producto?.id ? "Editar producto" : "Agregar Producto"}
      </button>
    </form>
  );
}
