import ServicioCesta from "../servicios/ServicioCesta";

// La cesta se guarda en un archivo JSON (json-server). "Descartar lista" elimina todos
// los productos de la cesta. Las listas predeterminadas ya no se utilizan.

export const eliminarLista = (setProductosPorSupermercado, setError, onClose, cesta) => {
    if (!cesta) return
    ServicioCesta.eliminarCesta().then(() => {
        setProductosPorSupermercado({
            mercadona: [],
            carrefour: [],
            dia: [],
            ahorramas: []
        });
    }).catch(() => {
        setError("Ha ocurrido un error al eliminar su cesta")
    })
    onClose()
}
