import ServicioCesta from "../servicios/ServicioCesta"

// La cesta se guarda en un archivo JSON (json-server), sin usuario. Al añadir un
// producto, json-server asigna un id que guardamos para poder eliminarlo después.

export const anadirProdCesta = (item, setResultados, resultados, setError) => {
    ServicioCesta.anadirProdCesta(item).then((respuesta) => {
        const idCesta = respuesta.data?.id;
        setResultados(() =>
            modificarResultadosCestaProdBuscador(item, resultados, true, idCesta)
        );
    }).catch(() => {
        setError("Ha ocurrido un error al añadir el producto a la cesta")
    })
}

export const eliminarProdCesta = (item, setResultados, resultados, setError) => {
    ServicioCesta.eliminarProdCesta(item.idCesta).then(() => {
        setResultados(() =>
            modificarResultadosCestaProdBuscador(item, resultados, false)
        );
    }).catch(() => {
        setError("Ha ocurrido un error al eliminar el producto de la cesta")
    })
}

export const modificarResultadosCestaProdBuscador = (item, resultados, seEncuentra, idCesta) => {
    return resultados.map(prod =>
        prod.nombre === item.nombre && prod.supermercado === item.supermercado && prod.precio === item.precio
            ? { ...prod, enLaCesta: seEncuentra, idCesta: seEncuentra ? (idCesta || prod.idCesta) : undefined }
            : prod
    );
}
