import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Nosotros } from "./pages/Nosotros";
import { Contacto } from "./pages/Contacto";
import { Login } from "./pages/Login";
import { Productos } from "./pages/Productos";
import { Producto } from "./pages/Producto";
import { Admin } from "./pages/Admin";
import { Footer } from "./components/Footer";
import { Error404 } from "./pages/Error404";
import { Carrito } from "./pages/Carrito";

function App() {
  return (
    <div className="flex flex-col min-h-screen min-w-full">
      <Navbar />
      <main className="flex-1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<Producto />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
