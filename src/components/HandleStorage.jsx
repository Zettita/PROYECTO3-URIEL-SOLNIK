import { useEffect, useState } from "react";

const HandleStorage = ({ dataCotizacion }) => {
  const [cotizacion, setCotizacion] = useState([dataCotizacion]);
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('historialCotizaciones'))
    setHistorial(savedHistory)
  }, [])
  

  useEffect(() => {
    setCotizacion(dataCotizacion);
  }, [dataCotizacion]);

  const saveCotizacion = () => {
    
    setHistorial([...historial, ...cotizacion]);
    
    localStorage.setItem("historialCotizaciones", JSON.stringify( historial )
    );
  };
  console.log(historial);
  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={saveCotizacion}>Guardar Cotizacion</button>
    </div>
  );
};

export default HandleStorage;
