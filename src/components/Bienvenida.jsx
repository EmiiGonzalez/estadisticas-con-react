import '../css/fondo.css';
import {Link } from 'react-router-dom';

export const Bienvenida = () => {
  return (
    <div className="main">
      <div className='contenedor'>
      <h1 className="text_fade ">Analistas de sistemas
      </h1>
      <Link to="/estadisticas" className="d-flex justify-content-center align-items-center"><button className="btn_inicio">Ir a las estadisticas</button></Link>
      </div>
      <h3 className="text_fade">
        Instituto de Formación Docente y Tecnica n°66
      </h3>
      <div className='div1'></div>
      <div className='div2'></div>
      <div className='div3'></div>
    </div>
  );
};
