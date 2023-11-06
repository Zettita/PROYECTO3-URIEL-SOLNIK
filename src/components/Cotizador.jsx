import { useEffect, useState } from "react";
import getData from "./getData";
import { Link } from "react-router-dom";
import CotizacionResult from "./CotizacionResult";
import HandleStorage from "./HandleStorage";
import Ubicaciones from "./Ubicaciones";
import Propiedades from "./propiedades";
import Metros from "./Metros";

export default function Cotizador() {
  const [data, setData] = useState({});
  const [cotizacion, setCotizacion] = useState(0);
  const [dataCotizacion, setDataCotizacion] = useState([]);
  const mt2 = 35.86;

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

    const localidadValue = Number(e.target.ubicacion.value);
    const propiedadValue = Number(e.target.tipo.value);
    const metrosValue = Number(e.target.metros.value);

    const localidadObj = data.ubicaciones.find(
      (ubicacion) => ubicacion.factor === localidadValue
    );
    console.log(localidadObj);
    const propiedadObj = data.propiedades.find(
      (propiedad) => propiedad.factor === propiedadValue
    );
    console.log(propiedadObj);


      setCotizacion(() => {
      const precio =  localidadValue *
      propiedadValue *
      metrosValue *
      mt2
      return precio.toFixed(2);
    }
      
    );
    console.log(cotizacion);

    setDataCotizacion(() => {
      const nuevaCotizacion = {
        fechaCotizacion: new Date().toLocaleString(),
        propiedad: propiedadObj.tipo,
        localidad: localidadObj.tipo,
        metros: metrosValue,
        precio: cotizacion
      };
      return [...dataCotizacion, nuevaCotizacion];
    });
  };

  useEffect(() => {
    setCotizacion(cotizacion) // Esto se ejecutará cada vez que cotizacion cambie
  }, [cotizacion]);

  console.log(cotizacion);


  return (
    <>
      <div className="center div-cotizador">
        <form style={{ backgroundColor: "white" }} onSubmit={handleSubmit}>
          <h2 className="center separador">Completa los datos solicitados</h2>
          <Propiedades opciones={data} />
          <Ubicaciones opciones={data} />
          <Metros />

          <button type="submit">Cotizar</button>

          {cotizacion !== 0 ? (
            <CotizacionResult resultado={cotizacion}></CotizacionResult>
          ) : (
            <div className="importe">Ingrese datos para cotizar</div>
          )}

          <HandleStorage
            cotizacion={cotizacion}
            dataCotizacion={dataCotizacion}
          ></HandleStorage>
        </form>
      </div>
    </>
  );
}
