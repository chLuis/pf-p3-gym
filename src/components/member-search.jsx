import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { LuX } from "react-icons/lu";
import { SOCIOS } from "../lib/socios";

export default function MemberSearch() {
  const [memberModal, setMemberModal] = useState(false);
  const [showMember, setShowMember] = useState(false);
  const [searchMember, setSearchMember] = useState("");
  const [member, setMember] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    plan: "",
    vencimiento: "",
  });

  const handleMember = () => {
    setMemberModal(true);
  };
  const handleCloseModal = () => {
    setMemberModal(false);
    setShowMember(false);
  }

  const handleSearchMember = () => {
    const member = SOCIOS.find(socio => socio.dni === searchMember)
    console.log(member);
    if(!member)
      return alert("No se encontró el socio");
    setMember(member)
    setShowMember(true)
  }

  return (
    <div>
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
                onChange={(e) => setSearchMember(e.target.value)}
                className="border-b max-w-32 border-b-primary outline-none"
              />
              <button
                type="button"
                onClick={handleSearchMember}
                className="bg-primary !border-primary text-white px-4 py-2 rounded-md"
              >
                Buscar
              </button>
            </div>
            {showMember && (
              <div className="flex flex-nowrap gap-1 border rounded-md p-2 mt-6">
                <BiUser className="min-w-8 mt-2" />
                <div>
                  <p className="font-semibold">{member?.nombre}</p>
                  <p className="capitalize">Plan: {member?.plan}</p>
                  <p className="text-sm">
                    Tu membresia finaliza el día <strong>{member?.vencimiento}</strong>
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
