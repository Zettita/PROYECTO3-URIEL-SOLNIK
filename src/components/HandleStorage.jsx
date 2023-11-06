import { useState } from "react";

const HandleStorage = ({dataCotizacion}) => {
const [data, setData] = useState([JSON.parse(localStorage.getItem("cotizacion"))])
  const handleLocalStorage = () => {
    localStorage.setItem(`cotizacion`, JSON.stringify({dataCotizacion}));
    // const storageData = localStorage.getItem('cotizaciones');
  };
  return (  
    <div style={{ marginTop: "20px" }}>
      <button onClick={handleLocalStorage}>Guardar Cotizacion</button>
    </div>
  );
};

export default HandleStorage;
