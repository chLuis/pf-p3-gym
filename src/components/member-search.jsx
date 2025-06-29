import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { LuX } from "react-icons/lu";
import axios from "axios";
import { toast } from "react-toastify";

const initialValues = {
    nombre: "",
    apellido: "",
    dni: "",
    nombre_plan: "",
    socio_hasta: "",
  }

export default function MemberSearch() {
  const [memberModal, setMemberModal] = useState(false);
  const [showMember, setShowMember] = useState(false);
  const [searchMember, setSearchMember] = useState("");
  const [member, setMember] = useState(initialValues);
  //cierra modal y vuelve valores a los iniciales, elimina los datos del estado de busqueda
  const handleCloseModal = () => {
    setMemberModal(false);
    setShowMember(false);
    setSearchMember("")
    setMember(initialValues)
  }

  const handleSearchMember = async () => {
    //valido que el dni sea de 8 digitos
    if(searchMember.length !== 8) return toast.error("El DNI debe tener 8 digitos");
    //valido que los digitos ingresados sean todos numeros
    if(isNaN(Number(searchMember))) return toast.error("El DNI debe ser un numero");

    //realizo la busqueda del socio por dni
    const {data} = await axios.get(`${import.meta.env.VITE_BACK}/socios/${searchMember}`)
    
    //si no se encontraron coincidencias se muestra por toast y se corta la funcion
    if(data.data.length === 0) {
      setShowMember(false);
      return toast.error("No se encontró el socio");
    }
    //si hay coincidencias se cargan los datos en el estado y se muestra la parte del html a renderizar
    setMember(data.data[0])
    setShowMember(true)
  }

  return (
    <div className="font-medium">
    {/* Boton que hará aparecer el modal para buscar estado del socio */}
      <div
        className="!text-primary font-rubik-dirt hover:!text-black !rounded-md hover:bg-primary border px-2 py-2 relative group capitalize cursor-pointer duration-200"
        onClick={() => setMemberModal(true)}
      >
        Socios
      </div>
      {/* Modal de busqueda del socio */}
      {memberModal && (
        <div
          onClick={handleCloseModal}
          className="fixed inset-0 flex z-50 justify-center items-center bg-black/50 backdrop-blur-md text-primary"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="animate-fade-in relative bg-black p-4 max-w-80 w-full border-2 rounded-md m-auto"
          >
            <LuX
              onClick={handleCloseModal}
              className="absolute top-2 right-2 cursor-pointer"
            />
            <p className="text-center text-2xl pb-6 font-rubik-dirt">Socios</p>
            <div className="flex flex-nowrap gap-4 items-center justify-center">
              <input
                type="text"
                placeholder="DNI"
                inputMode="numeric"
                pattern="[0-9]"
                required
                minLength={8}
                maxLength={8}
                onChange={(e) => setSearchMember(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearchMember()}  // Para enviar con enter en lugar de clickear el boton
                className="border-b max-w-32 border-b-primary outline-none !font-rubik-dirt"
              />
              <button
                type="button"
                onClick={handleSearchMember}
                className="!bg-primary !border-primary !text-black hover:!bg-black hover:!text-primary px-4 py-2 rounded-md !font-rubik-dirt duration-200"
              >
                Buscar
              </button>
            </div>
            {/* Aqui se muestran los datos del socio que se encontró */}
            {showMember && (
              <div className="flex flex-nowrap gap-1 border rounded-md p-2 mt-6 !font-rubik">
                <BiUser className="min-w-8 mt-2" />
                {/* Si el socio tiene el estado de desafiliado solo se muestra la situacion */}
                {member.nombre_plan === 'desafiliado' ? 
                <div>Tu membresia fue revocada, comunicate por favor con un encargado del local</div>
                :<div>
                  <p className="!font-rubik-dirt uppercase">{member?.nombre}</p>
                  <p className="!font-rubik-dirt capitalize">Plan: {member?.nombre_plan}</p>
                  <p className="text-sm">
                    Tu membresia finaliza el día <strong>{member?.socio_hasta}</strong>
                  </p>
                </div>}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
