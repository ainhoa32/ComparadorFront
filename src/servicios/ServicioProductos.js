import httpExterno from "./conexionAxios/http-externo";
import http from "./conexionAxios/http-axios";

// Nota: Ya no se usa autenticación de usuarios, por lo que se eliminan las cabeceras de token.

class ServicioProductos {
  buscarProducto(nombre) {
    return httpExterno.get(`/productos/precioGranel/${nombre}`);
  }

  prods() {
    return http.get("/productos");
  }

  prodsCesta() {
    return http.get("/productosCesta");
  }

  buscarProductoSupermercadosConcretos(nombre, supermercados) {
    return httpExterno.get(
      `/productos/precioGranel/${nombre}/${supermercados}`
    );
  }

  buscarCesta(correoUsuario) {
    return httpExterno.get(`/productos/${correoUsuario}`);
  }
}

export default new ServicioProductos();
