import { useEffect, useState } from "react";
import getData from "./getData";
import { Link } from "react-router-dom";
import CotizacionResult from "./CotizacionResult";
import HandleStorage from "./HandleStorage";
import Ubicaciones from "./Ubicaciones";
import Propiedades from "./Propiedades";
import Metros from "./Metros";

export default function Cotizador() {
  const [data, setData] = useState({});
  const [cotizacion, setCotizacion] = useState(0);
  const [dataCotizacion, setDataCotizacion] = useState({});
  const mt2 = 35.86;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const formatData = async () => {
      const data = await getData();
      const formattedData = data.reduce(
        (acc, curr) => {
          if (curr.categoria === "propiedad") {
            acc.propiedades.push(curr);
          } else {
            acc.ubicaciones.push(curr);
          }

          return acc;
        },
        { propiedades: [], ubicaciones: [] }
      );
      setData(formattedData);
    };

    formatData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const localidadValue = Number(e.target.ubicacion.value);
    const propiedadValue = Number(e.target.tipo.value);
    const metrosValue = Number(e.target.metros.value);
    const precio = localidadValue * propiedadValue * metrosValue * mt2;

    const localidadObj = data.ubicaciones.find(
      (ubicacion) => ubicacion.factor === localidadValue
    );

    const propiedadObj = data.propiedades.find(
      (propiedad) => propiedad.factor === propiedadValue
    );

    const nuevaCotizacion = {
      fechaCotizacion: new Date().toLocaleString(),
      propiedad: propiedadObj.tipo,
      localidad: localidadObj.tipo,
      metros: metrosValue,
      precio: precio.toFixed(2),
    };

    setTimeout(() => {
      setLoading(false);
      setCotizacion(precio.toFixed(2));
    }, 2500);

    setTimeout(() => {
      setDataCotizacion(nuevaCotizacion);
    }, 2500);
  };

  console.log(dataCotizacion);

  return (
    <>
      <div className="center div-cotizador">
        <form style={{ backgroundColor: "white" }} onSubmit={handleSubmit}>
          <h2 className="center separador">Completa los datos solicitados</h2>
          <Propiedades opciones={data} />
          <Ubicaciones opciones={data} />
          <Metros />

          <button onClick={() => handleSubmit} disabled={loading}>
            {loading ? (
              <img
                src="./images/Ellipsis-1.1s-44px.gif"
                width="80%"
                alt="Cargando..."
              />
            ) : (
              "Cotizar"
            )}
          </button>

          {cotizacion !== 0 ? (
            <CotizacionResult resultado={cotizacion}></CotizacionResult>
          ) : (
            <div className="importe">Ingrese datos para cotizar</div>
          )}
        </form>
        <HandleStorage dataCotizacion={dataCotizacion}></HandleStorage>
      </div>
    </>
  );
}
