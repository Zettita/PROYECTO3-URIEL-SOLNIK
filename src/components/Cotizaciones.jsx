import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export default function Cotizaciones() {
const [data, setData] = useState(JSON.parse(localStorage.getItem("cotizacion")))
console.log(data);

  return (
    <><h1 className="center separador">Ver Historial 📋</h1>
    <div className=" center div-cotizador">
      <table>
            <thead>
                <tr>
                    <th>Fecha de cotización</th>
                    <th>Propiedad</th>
                    <th>Ubicación</th>
                    <th>Metros cuadrados</th>
                    <th>Póliza mensual</th>
                </tr>
            </thead>
            <tbody>
              
                {data?.dataCotizacion?.map((cotizacion, index) => {
                  console.log(cotizacion);
                  return(
                    <tr key={index}>
                    <td>{cotizacion?.fechaCotizacion}</td>
                    <td>{cotizacion?.propiedad}</td>
                    <td>{cotizacion?.localidad}</td>
                    <td>{cotizacion?.metros}</td>
                    <td>{cotizacion?.precio}</td>
                    </tr>
                  )
                })}
                
            </tbody>
        </table>
    <button>
      <Link to="/" >Atras</Link>
    </button>
  </div>
  </>
  )
}



