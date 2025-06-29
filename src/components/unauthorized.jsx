export default function UnauthorizedComponent() {
  return (
    <h3 className="text-xl max-w-96 px-4 mx-auto text-center">
      No estas autorizado a ver esta sección. Si esto es un error por favor
      comunicate con un administrador
    </h3>
  );
}
//Este componente se muestra en la pagina de administrador cuando se intenta acceder a una opcion a la que no tiene permisos