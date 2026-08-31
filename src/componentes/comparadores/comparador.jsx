import {  useState } from 'react';
import ServicioProductos from '../../servicios/ServicioProductos';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../estilos/comparador.css"
import { comprobarSiEstanEnLaCesta, filtrarPorSupermercado, scrollArriba } from '../../herramientas/general';
import ResultadoBusqueda from './resultadoBusqueda';
import EncabezadoComparador from './encabezadoComparador';

// Nota: El guardado de favoritos, la cesta de la compra y las listas predeterminadas
// dependían de una base de datos y/o de un usuario. Se han retirado del comparador.

const Comparador = () => {

  const [producto, setProducto] = useState('');
  const [resultados, setResultados] = useState([]);
  const [supermercadoSeleccionado, setSupermercadoSeleccionado] = useState("Todos los supermercados");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const titulo = "Comparator, tu comparador de confianza"
  const textoEncabezado1 = "Descubre la manera más fácil y eficiente de realizar tus compras online con nuestro comparador de precios entre supermercados."
  const textoEncabezado2 = "Introduce tu producto y compara precios en segundos entre los principales supermercados."

  const manejarSubmit = async (e) => {
    e.preventDefault();
    realizarBusqueda()
  };

  scrollArriba()

  const realizarBusqueda = (nombreProducto) => {
    const productoABuscar = nombreProducto || producto
    if (!productoABuscar.trim()) {
      setResultados([]);
      setError("Introduzca el nombre de un producto.")
    } else {
      setLoading(true);

      ServicioProductos.buscarProducto(productoABuscar.trim().toLowerCase()).then(respuesta => {
        if (respuesta.data && respuesta.data.length > 0) {
          setError(null);
          setLoading(false);
          comprobarSiEstanEnLaCesta(respuesta.data, setResultados, setError);
        } else {
          setError('No se encontraron productos.');
          setResultados([]);
          setLoading(false);
        }
      }).catch(() => {
        setError('Ha ocurrido un error con la conexión');
        setResultados([]);
        setLoading(false);
      });
    }
  }

  return (
    <div className="container py-4">
      <EncabezadoComparador titulo={titulo} texto1={textoEncabezado1} texto2={textoEncabezado2} img={"imagenes/compra.png"} />

      <form className="d-flex flex-wrap justify-content-center gap-2" onSubmit={manejarSubmit}>
        <input
          type="text"
          className="form-control w-50"
          placeholder="Busca el producto"
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
        />
        <select name="supermercado" id='selectSupermercado' className='form-select w-auto' onChange={(e) => setSupermercadoSeleccionado(e.target.value)}>
          <option value="Todos los supermercados">Todos los supermercados</option>
          <option value="Mercadona">Mercadona</option>
          <option value="Ahorramas">Ahorra más</option>
          <option value="Carrefour">Carrefour</option>
          <option value="Dia">Día</option>
        </select>
        <button type="submit" className="btn btn-success">Buscar</button>
      </form>

      <ResultadoBusqueda producto={producto} resultados={filtrarPorSupermercado(resultados, supermercadoSeleccionado)} setResultados={setResultados} loading={loading} error={error} setError={setError} />

    </div>
  );
};

export default Comparador;
