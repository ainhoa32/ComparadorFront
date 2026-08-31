// Nota: La cesta se guarda en un archivo JSON (json-server) y ya no depende de una base
// de datos ni de un usuario. Las funciones de favoritos y de listas predeterminadas
// siguen sin utilizarse, por lo que se conservan comentadas.

import ServicioCesta from "../servicios/ServicioCesta";

export const filtrarPorSupermercado = (
  resultados,
  supermercadoSeleccionado
) => {
  if (supermercadoSeleccionado !== "Todos los supermercados") {
    return resultados.filter(
      (prod) => prod.supermercado === supermercadoSeleccionado.toUpperCase()
    );
  }
  return resultados;
};

export const comprobarSiEstanEnLaCesta = (
  productosTotal,
  setResultados,
  setError
) => {
  ServicioCesta.getProdsCesta()
    .then((respuesta) => {
      const productosEnCesta = respuesta.data || [];
      const productosActualizados = productosTotal.map((prodResultado) => {
        const enCesta = productosEnCesta.find(
          (prodCesta) =>
            prodCesta.nombre === prodResultado.nombre &&
            prodCesta.supermercado === prodResultado.supermercado
        );

        return {
          ...prodResultado,
          enLaCesta: Boolean(enCesta),
          idCesta: enCesta ? enCesta.id : undefined,
        };
      });

      setResultados(productosActualizados);
    })
    .catch(() => {
      setError("Ha ocurrido un error con la conexión");
    });
};

export const dividirResultadosPorSupermercados = (
  productos,
  setProductosPorSupermercado
) => {
  const clasificados = {
    mercadona: [],
    carrefour: [],
    dia: [],
    ahorramas: [],
  };

  productos.forEach((prod) => {
    const supermercado = prod.supermercado.toLowerCase();

    if (clasificados[supermercado]) {
      clasificados[supermercado].push(prod);
    }
  });
  setProductosPorSupermercado(clasificados);
};

export const obtenerIdProducto = (producto) =>
  `producto-cesta-${producto.precio}-${producto.nombre}`;

export const listaConResultados = (lista) => {
  return Object.values(lista).some((arr) => arr.length > 0) || [];
};

export const scrollArriba = () => {
  window.scrollTo({ top: 0, behavior: 'auto' });
}

// ----- Funcionalidades que siguen sin utilizarse (favoritos y listas predeterminadas) -----
// import ServicioBusquedasFavoritas from "../servicios/ServicioBusquedasFavoritas";

// export const comprobarSiProdListaEstanEnLaCesta = async (productos, user) => { ... }

// export const cambiarImgFavoritos = (imagen, setImagen) => { ... }

// export const handleInputChange = async (...) => { ... }

// const comprobarEsFav = async (prod) => { ... }

// export const manejarFavoritos = (...) => { ... }
