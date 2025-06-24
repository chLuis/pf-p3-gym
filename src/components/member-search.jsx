import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { LuX } from "react-icons/lu";
import axios from "axios";

export default function MemberSearch() {
  const [memberModal, setMemberModal] = useState(false);
  const [showMember, setShowMember] = useState(false);
  const [searchMember, setSearchMember] = useState("");
  const [member, setMember] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    nombre_plan: "",
    socio_hasta: "",
  });

  const handleMember = () => {
    setMemberModal(true);
  };
  const handleCloseModal = () => {
    setMemberModal(false);
    setShowMember(false);
  }

  const handleSearchMember = async () => {
    const {data} = await axios.get(`${import.meta.env.VITE_BACK}/socios/${searchMember}`)
    
    if(data.data.length === 0)
      return alert("No se encontró el socio");
    setMember(data.data[0])
    setShowMember(true)
  }

  return (
    <div className="z-50 font-medium">
      <div
        className="!text-primary hover:!text-black hover:bg-primary border px-2 py-2 !font-bold relative group capitalize cursor-pointer duration-200"
        onClick={handleMember}
      >
        Socios
      </div>
      {memberModal && (
        <div
          onClick={handleCloseModal}
          className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-md text-primary"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="animate-fade-in relative bg-black p-4 max-w-80 w-full border-2 rounded-md m-auto"
          >
            <LuX
              onClick={handleCloseModal}
              className="absolute top-2 right-2 cursor-pointer"
            />
            <p className="text-center text-2xl pb-6">Socios</p>
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
                className="border-b max-w-32 border-b-primary outline-none"
              />
              <button
                type="button"
                onClick={handleSearchMember}
                className="bg-primary !border-primary text-black hover:bg-black hover:text-primary px-4 py-2 rounded-md duration-200"
              >
                Buscar
              </button>
            </div>
            {showMember && (
              <div className="flex flex-nowrap gap-1 border rounded-md p-2 mt-6">
                <BiUser className="min-w-8 mt-2" />
                <div>
                  <p className="font-semibold">{member?.nombre}</p>
                  <p className="capitalize">Plan: {member?.nombre_plan}</p>
                  <p className="text-sm">
                    Tu membresia finaliza el día <strong>{member?.socio_hasta}</strong>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
