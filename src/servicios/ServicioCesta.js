// La cesta se guarda en localStorage. No se usa ninguna base de datos ni json-server.
// La API imita a la de un servicio REST (devuelve Promesas con la forma { data })
// para que los llamadores existentes sigan funcionando sin cambios.

const CLAVE = "cesta";

const leerCesta = () => {
  try {
    return JSON.parse(localStorage.getItem(CLAVE)) || [];
  } catch {
    return [];
  }
};

const guardarCesta = (cesta) => {
  localStorage.setItem(CLAVE, JSON.stringify(cesta));
};

const generarId = () =>
  Date.now().toString(36) + Math.random().toString(36).substring(2, 8);

class ServicioCesta {
  getProdsCesta() {
    return Promise.resolve({ data: leerCesta() });
  }

  anadirProdCesta(producto) {
    const cesta = leerCesta();
    const nuevo = { ...producto, id: generarId(), enLaCesta: true };
    cesta.push(nuevo);
    guardarCesta(cesta);
    return Promise.resolve({ data: nuevo });
  }

  eliminarProdCesta(id) {
    const cesta = leerCesta().filter((producto) => producto.id !== id);
    guardarCesta(cesta);
    return Promise.resolve({ data: {} });
  }

  eliminarCesta() {
    guardarCesta([]);
    return Promise.resolve({ data: [] });
  }
}

export default new ServicioCesta();
