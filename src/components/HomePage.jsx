import { Link } from 'react-router-dom';
import Cotizador from './Cotizador';





const HomePage = () => {
  return (
    <>
    <div className="historial"><Link to="/cotizaciones"><span title="Ver Historial">📋</span></Link></div>
    <h1 className="center separador">Seguros del hogar 🏡</h1>
    < Cotizador />
    </>
  )
};

export default HomePage;
