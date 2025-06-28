import React from 'react'
import { PiBroom } from 'react-icons/pi'
import DeleteSocio from './admin-socio-delete'
import { fetchUsuarios } from '../services/usuarios.service'
import BloquearDesbloquearUsuario from './admin-usuarios-bloquear-desbloquear'
import FormUsuario from './form-usuario'
import DeleteUsuario from './admin-usuario-delete'
import ResetPassword from './admin-usuarios-reset-password'

export const AdminUsuarios = ({isAuthorized}) => {
  const [usuarioPatch, setUsuarioPatch] = React.useState(initialValues)
  const [usuarios, setUsuarios] = React.useState([]);

  function cleanForm() {
    setUsuarioPatch(initialValues)
  }

  async function fetchUsuariosAction() {
    const response = await fetchUsuarios()
    setUsuarios(response.data)
  }

  React.useEffect( () => {
    fetchUsuariosAction()
  }, []);


  return (
    <div className='flex flex-row gap-4 font-rubik'>
      <div className='flex flex-col gap-2'>
        <div className='sticky top-2 flex flex-col gap-2 items-center'>
        {(isAuthorized || usuarioPatch.id_usuario !== 0) && <FormUsuario usuarioPatch={usuarioPatch} getUsuarios={fetchUsuariosAction} cleanForm={cleanForm}/>}
        {usuarioPatch?.id_usuario !== 0 &&
            <button onClick={cleanForm} className='!bg-primary w-full text-black flex flex-nowrap gap-1 justify-center items-center'>
              <PiBroom /> Limpiar formulario
            </button>

        }
      </div>
      </div>
      <div className='p-2 border rounded-md overflow-x-auto w-fit mx-auto overscroll-x-auto min-h-fit'>
        <p className='text-center text-2xl pb-2'>Usuarios del GYM</p>
            <table className='w-full min-w-fit'>
              <thead className='w-full border border-primary min-w-fit'>
                <tr className='flex flex-nowrap w-full min-w-fit'>
                  <th className='min-w-32 w-full max-w-48 p-1 text-center'>Usuario</th>
                  <th className='min-w-32 max-w-32 p-1'>Rol</th>
                  <th className='min-w-28 max-w-28 p-1'>Bloqueado</th>
                  <th className='min-w-[400px] p-1 pe-1'>Acciones</th>
                </tr>
              </thead>
              <tbody className='border border-primary w-full min-w-fit'>
              {usuarios?.map((user, index) => 
                <tr key={index} className={`${index % 2 === 0 ? "bg-black" : ""} flex flex-nowrap hover:bg-primary hover:text-black place-items-center duration-200 min-w-fit`}>
                  <td className='min-w-32 w-full max-w-48 truncate text-center text-nowrap'>{user.usuario}</td>
                  <td className='min-w-32 max-w-28 p-1 text-center'>{user.rol}</td>
                  <td className='min-w-28 max-w-28 p-1 text-center'>{user.isBlocked ? "Si" : "No"}</td>
                  <td className='min-w-[400px] p-1 flex flex-nowrap justify-center gap-1'>
                    <button className='!text-white !bg-blue-700 !p-1 hover:scale-105 duration-200' onClick={() => setUsuarioPatch(user)}>Editar</button>
                    <BloquearDesbloquearUsuario id_usuario={user.id_usuario} getUsuarios={fetchUsuariosAction} isBlocked={user.isBlocked} />
                    <ResetPassword id_usuario={user.id_usuario} />
                    <DeleteUsuario id_usuario={user.id_usuario} getUsuarios={fetchUsuariosAction} />
                  </td>
                </tr>
              )}
                
              </tbody>
            </table>
            
              
          </div>
        </div>
  )
}

  const initialValues = {
    id_usuario: 0,
    usuario: "",
    rol: 0,
    isBlocked: null
  }