import axios from "axios";
import { useEffect, useState } from "react";
import { Dona } from "./chars/Dona.jsx";
import { initData } from "./helpers/initData.js";
import { BarrasOnlyEdad } from "./chars/BarrasOnlyEdad.jsx";
import { BarrasOnlyRedes } from "./chars/BarrasOnlyRedes.jsx";
import { Lineas } from "./chars/Lineas.jsx";
import { Pastel } from "./chars/Pastel.jsx";
import { Polo } from "./chars/Polo.jsx";
import "../css/carrusele.css";

export const Carrusele = ({ URI }) => {
  const [bdData, setBdData] = useState(initData);
  const pollingInterval = 60000; // Intervalo de tiempo en milisegundos
  const fetchData = () => {
    axios
      .get(URI)
      .then((res) => {
        // Fusiona los datos existentes con los nuevos datos
        setBdData((prevData) => ({
          ...prevData,
          ...res.data,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData(); // Realiza la primera llamada al montar el componente

    const intervalId = setInterval(() => {
      fetchData(); // Realiza una llamada cada cierto intervalo de tiempo

      // Limpia el intervalo cuando el componente se desmonta
      return () => clearInterval(intervalId);
    }, pollingInterval);
  }, []);

  const edad1 = bdData["edad_14-25"];
  const edad2 = bdData["edad_26-40"];
  const edad3 = bdData["edad_41-55"];
  const edad4 = bdData["edad_56-99"];

  return (
    <div
      id="carruselRespuestas"
      className="carousel slide carousel-fade h-100"
      data-bs-touch="true"
      data-bs-pause="true"
      data-bs-ride="carousel"
      data-bs-interval="7000"
      data-bs-config='{
        ride: "carousel",
      }'
    >
      <div className="carousel-indicators mb-4 indicadores">
        <button
          type="button"
          data-bs-target="#carruselRespuestas"
          data-bs-slide-to="0"
          className="active  btn-rounded-circle"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#carruselRespuestas"
          data-bs-slide-to="1"
          className="btn-rounded-circle"
        ></button>
        <button
          type="button"
          data-bs-target="#carruselRespuestas"
          data-bs-slide-to="2"
          className="btn-rounded-circle"
        ></button>
        <button
          type="button"
          data-bs-target="#carruselRespuestas"
          data-bs-slide-to="3"
          className="btn-rounded-circle"
        ></button>
        <button
          type="button"
          data-bs-target="#carruselRespuestas"
          data-bs-slide-to="4"
          className="btn-rounded-circle"
        ></button>
        <button
          type="button"
          data-bs-target="#carruselRespuestas"
          data-bs-slide-to="5"
          className="btn-rounded-circle"
        ></button>
        <button
          type="button"
          data-bs-target="#carruselRespuestas"
          data-bs-slide-to="6"
          className="btn-rounded-circle"
        ></button>
        <button
          type="button"
          data-bs-target="#carruselRespuestas"
          data-bs-slide-to="7"
          className="btn-rounded-circle"
        ></button>
        <button
          type="button"
          data-bs-target="#carruselRespuestas"
          data-bs-slide-to="8"
          className="btn-rounded-circle"
        ></button>
        <button
          type="button"
          data-bs-target="#carruselRespuestas"
          data-bs-slide-to="9"
          className="btn-rounded-circle"
        ></button>
        <button
          type="button"
          data-bs-target="#carruselRespuestas"
          data-bs-slide-to="10"
          className="btn-rounded-circle"
        ></button>
        <button
          type="button"
          data-bs-target="#carruselRespuestas"
          data-bs-slide-to="11"
          className="btn-rounded-circle"
        ></button>
        <button
          type="button"
          data-bs-target="#carruselRespuestas"
          data-bs-slide-to="12"
          className="btn-rounded-circle"
        ></button>
        <button
          type="button"
          data-bs-target="#carruselRespuestas"
          data-bs-slide-to="13"
          className="btn-rounded-circle"
        ></button>
        <button
          type="button"
          data-bs-target="#carruselRespuestas"
          data-bs-slide-to="14"
          className="btn-rounded-circle"
        ></button>
        <button
          type="button"
          data-bs-target="#carruselRespuestas"
          data-bs-slide-to="15"
          className="btn-rounded-circle"
        ></button>
        <button
          type="button"
          data-bs-target="#carruselRespuestas"
          data-bs-slide-to="16"
          className="btn-rounded-circle"
        ></button>
        <button
          type="button"
          data-bs-target="#carruselRespuestas"
          data-bs-slide-to="17"
          className="btn-rounded-circle"
        ></button>
      </div>
      <div className="carousel-inner h-100 w-100 ">
        <div className="carousel-item active h-75 ">
          <BarrasOnlyEdad
            edad1={edad1}
            edad2={edad2}
            edad3={edad3}
            edad4={edad4}
            className="w-100 h-100"
          />
          <div className="carousel-caption position-absolute top-100 d-md-block data-bs-interval='7000">
            <p className="fw-bold fs-4 text-white font-family-sans-serif textoGrafico">
              Cantidad de participantes por rango de edad
            </p>
          </div>
        </div>
        <div className="carousel-item h-75">
          <Dona bdDatos={bdData.sexo} className="w-100 h-100" />
          <div className="carousel-caption position-absolute top-100 d-md-block">
            <p className="fw-bold fs-4  text-white font-family-sans-serif textoGrafico">
              Cantidad de participantes por sexo
            </p>
          </div>
        </div>
        <div className="carousel-item h-75">
          <Dona bdDatos={bdData.p1} className="w-100 h-100" />
          <div className="carousel-caption position-absolute top-100 d-md-block">
            <p className="fw-bold fs-4 text-white font-family-sans-serif textoGrafico">
              Conocimiento sobre lo que es la Ciber Seguridad
            </p>
          </div>
        </div>
        <div className="carousel-item h-75">
          <Dona bdDatos={bdData.p2} className="w-100 h-100" />
          <div className="carousel-caption position-absolute top-100 d-md-block ">
            <p className="fw-bold fs-4 text-white font-family-sans-serif textoGrafico">
              Al usar internet, tienen en cuenta que el sitio sea seguro
            </p>
          </div>
        </div>
        <div className="carousel-item h-75">
          <Lineas bdDatos={bdData.p3} className="w-100 h-100" />
          <div className="carousel-caption position-absolute top-100 d-md-block">
            <p className="fw-bold fs-4 text-white font-family-sans-serif textoGrafico">
              Que tan importante es la ciber seguridad del 0 al 10
            </p>
          </div>
        </div>
        <div className="carousel-item h-75">
          <Pastel bdDatos={bdData.p4} className="w-100 h-100" />
          <div className="carousel-caption position-absolute top-100 d-md-block ">
            <p className="fw-bold fs-4 text-white font-family-sans-serif textoGrafico">
              Respecto al uso de contraseñas
            </p>
          </div>
        </div>
        <div className="carousel-item h-75">
          <Pastel bdDatos={bdData.p5} className="w-100 h-100" />
          <div className="carousel-caption position-absolute top-100 d-md-block">
            <p className="fw-bold fs-4 text-white font-family-sans-serif textoGrafico">
              A la hora de generar contraseñas
            </p>
          </div>
        </div>
        <div className="carousel-item h-75">
          <Pastel bdDatos={bdData.p6} className="w-100 h-100" />
          <div className="carousel-caption position-absolute top-100 d-md-block ">
            <p className="fw-bold fs-4 text-white font-family-sans-serif textoGrafico">
              Almacenamiento de contraseñas
            </p>
          </div>
        </div>
        <div className="carousel-item h-75">
          <Dona bdDatos={bdData.p7} className="w-100 h-100" />
          <div className="carousel-caption position-absolute top-100 d-md-block ">
            <p className="fw-bold fs-4 text-white font-family-sans-serif textoGrafico">
              Metodos alternativos a las contraseñas
            </p>
          </div>
        </div>
        <div className="carousel-item h-75">
          <Pastel bdDatos={bdData.p8} className="w-100 h-100" />
          <div className="carousel-caption position-absolute top-100 d-md-block ">
            <p className="fw-bold fs-4 text-white font-family-sans-serif textoGrafico">
              Respecto al uso de dispositivos
            </p>
          </div>
        </div>
        <div className="carousel-item h-75">
          <Pastel bdDatos={bdData.p9} className="w-100 h-100" />
          <div className="carousel-caption position-absolute top-100 d-md-block ">
            <p className="fw-bold fs-4 text-white font-family-sans-serif textoGrafico">
              Tipo de plan de internet
            </p>
          </div>
        </div>
        <div className="carousel-item h-75">
          <Lineas bdDatos={bdData.p10} className="w-100 h-100" />
          <div className="carousel-caption position-absolute top-100 d-md-block ">
            <p className="fw-bold fs-4 text-white font-family-sans-serif textoGrafico">
              Frecuencia y uso del celular
            </p>
          </div>
        </div>
        <div className="carousel-item h-75">
          <div className="w-100 h-100">
            <div className="row redes">
              <div className="col-lg-6 col-md-12 d-flex align-items-center">
                <BarrasOnlyRedes
                  titulo="Red social mas usada"
                  bdDatos={bdData.p11_1}
                  className="w-100 h-50"
                />
              </div>
              <div className="col-lg-6 col-md-12">
                <BarrasOnlyRedes
                  titulo="Segunda red social mas usada"
                  bdDatos={bdData.p11_2}
                  className="w-100 h-50"
                />
              </div>
            </div>
          </div>
          <div className="carousel-caption position-absolute top-100 d-md-block">
            <p className="fw-bold fs-4 text-white font-family-sans-serif textoGrafico">
              ¿Cuales redes sociales son las mas preferidas?
            </p>
          </div>
        </div>
        <div className="carousel-item h-75">
          <Dona bdDatos={bdData.p12} className="w-100 h-100" />
          <div className="carousel-caption position-absolute top-100 d-md-block">
            <p className="fw-bold fs-4 text-white font-family-sans-serif textoGrafico">
              Dispositivos mas usados
            </p>
          </div>
        </div>
        <div className="carousel-item h-75">
          <Pastel bdDatos={bdData.p13} className="w-100 h-100" />
          <div className="carousel-caption position-absolute top-100 d-md-block">
            <p className="fw-bold fs-4 text-white font-family-sans-serif textoGrafico">
              Los usuarios, ¿leen los terminos y condiciones?
            </p>
          </div>
        </div>
        <div className="carousel-item h-75">
          <Pastel bdDatos={bdData.p14} className="w-100 h-100" />
          <div className="carousel-caption position-absolute top-100 d-md-block">
            <p className="fw-bold fs-4 text-white font-family-sans-serif textoGrafico">
              Que buscan los usuarios al instalar un programa
            </p>
          </div>
        </div>
        <div className="carousel-item h-75">
          <Polo bdDatos={bdData.p15} className="w-100 h-100" />
          <div className="carousel-caption position-absolute top-100 d-md-block">
            <p className="fw-bold fs-4 text-white font-family-sans-serif textoGrafico">
              Como protegen los usuarios sus dispositivos
            </p>
          </div>
        </div>
        <div className="carousel-item h-75">
          <Pastel bdDatos={bdData.p16} className="w-100 h-100" />
          <div className="carousel-caption position-absolute top-100 d-md-block">
            <p className="fw-bold fs-4 text-white font-family-sans-serif textoGrafico">
              ¿Utiliza servicios donde ingrese datos bancarios como billeteras
              virtuales o sitios de compra?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
