import Comparador from './componentes/comparadores/comparador'
import Comparador2 from './componentes/comparadores/comparador2'

import { Routes, Route } from 'react-router-dom';
import MenuSuperior from './componentes/comunes/menu';
import Pagina404 from './componentes/comunes/Pagina404';
import BotonScroll from './componentes/comunes/botonScroll';
import CestaCompra from './componentes/cesta/cestaCompra';

// Funcionalidad de usuarios/autenticación y base de datos (cesta, favoritos, listas, administración)
// ya no se utilizan. Se dejan comentadas para conservarlas en el proyecto sin que se referencien.
// import { AuthProvider, useAuth } from './Login/AuthProvider';
// import Login from './Login/login';
// import RutasProtegidas from './Login/RutasProtegidas';
// import CestaCompra from './componentes/cesta/cestaCompra';
// import AdministrarListas from './componentes/admin/administrarListas/administrarListas';
// import RutasAdminProtegida from './Login/RutasAdminProtegidas';
// import ComparadorAdmin from './componentes/admin/comparadorProductosAdmin.jsx/comparadorAdmin';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <MenuSuperior />
      </header>
      <main className='pt-5'>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Comparador />
                <BotonScroll />
              </>
            }
          />

          <Route path="/comparador2" element={
            <>
              <Comparador2 />
              <BotonScroll />
            </>
          } />

          <Route path='/cesta' element={
            <>
              <CestaCompra />
            </>
          }/>

          {/* Rutas que dependían de usuarios y base de datos (se mantienen comentadas, no se usan):
          <Route path="/login" element={<Login />} />
          <Route path="/administrarListas" element={<RutasAdminProtegida><AdministrarListas /><BotonScroll /></RutasAdminProtegida>} />
          <Route path="/comparadorAdmin/:nombreLista" element={<RutasAdminProtegida><ComparadorAdmin /><BotonScroll /></RutasAdminProtegida>} />
          <Route path="/cestaCompra" element={<RutasProtegidas><CestaCompra /><BotonScroll /></RutasProtegidas>} />
          */}

          <Route path="*" element={<Pagina404 />} />

        </Routes>
      </main>
    </div>
  );
}

export default App
