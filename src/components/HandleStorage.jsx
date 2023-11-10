import { useEffect, useState } from "react";
import Alerta from "./Alerts/Alerta";

const HandleStorage = ({ dataCotizacion }) => {
  const [cotizacion, setCotizacion] = useState(dataCotizacion);
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    const savedHistory =
      JSON.parse(localStorage.getItem("historialCotizaciones")) || [];
    setHistorial(savedHistory);
  }, []);

  useEffect(() => {
    setCotizacion(dataCotizacion);
  }, [dataCotizacion]);

  const saveCotizacion = () => {
    const updatedHistory = [...historial, cotizacion];
    setTimeout(() => {
      localStorage.setItem(
        "historialCotizaciones",
        JSON.stringify(updatedHistory)
      );
      setHistorial(updatedHistory);
      Alerta("", "Cotización guardada con éxito.", "success");
    }, 2500);
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={saveCotizacion}>Guardar Cotizacion</button>
    </div>
  );
};

export default HandleStorage;
