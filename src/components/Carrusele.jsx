import axios from "axios";
import { useEffect, useState } from "react";
import { Dona } from "./chars/Dona.jsx";
import { initData } from "./helpers/initData.js";
import { Barras } from "./chars/Barras.jsx";

export const Carrusele = () => {
  const [bdData, setBdData] = useState(initData);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/estadisticas/lastUpdate")
      .then((res) => {
        setBdData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

 const edad1 = bdData["edad_14-25"];
 const edad2 = bdData["edad_26-40"];
 const edad3 = bdData["edad_41-55"];
 const edad4 = bdData["edad_56-99"];


  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide carousel-fade h-100">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner h-100 w-100 ">
          <div className="carousel-item active h-75 " >
            <Barras edad1={edad1} edad2={edad2}  edad3={edad3} edad4={edad4} className="w-100 h-100" />
          </div>
          <div className="carousel-item h-75">
            <Dona bdDatos={bdData.sexo} className="w-100 h-100" />
          </div>
          <div className="carousel-item h-75">
            <Dona bdDatos={bdData.p2} className="w-100 h-100" />
          </div>
        </div>
      </div>
    </>
  );
};
