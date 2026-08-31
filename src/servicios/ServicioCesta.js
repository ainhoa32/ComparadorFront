import http from "./conexionAxios/http-axios";

// La cesta se guarda en un archivo JSON (json-server), no en una base de datos ni
// asociada a un usuario. Por eso no se usan cabeceras de autenticación ni parámetros
// de usuario.

class ServicioCesta {
  getProdsCesta() {
    return http.get(`/productosCesta`);
  }

  anadirProdCesta(producto) {
    return http.post(`/productosCesta`, producto);
  }

  eliminarProdCesta(id) {
    return http.delete(`/productosCesta/${id}`);
  }

  async eliminarCesta() {
    const respuesta = await http.get(`/productosCesta`);
    const productos = respuesta.data || [];
    await Promise.all(
      productos.map((producto) => this.eliminarProdCesta(producto.id))
    );
    return respuesta;
  }
}

export default new ServicioCesta();
