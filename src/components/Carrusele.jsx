import axios from "axios";
import { useEffect, useState } from "react";
import { Dona } from "./chars/Dona.jsx";
import { initData } from "./helpers/initData.js";

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
            <Dona bdDatos={bdData.sexo} className=" w-100 h-100" />
          </div>
          <div className="carousel-item h-75">
            <Dona bdDatos={bdData.p1} className="w-100 h-100" />
          </div>
          <div className="carousel-item h-75">
            <Dona bdDatos={bdData.p2} className="w-100 h-100" />
          </div>
        </div>
      </div>
    </>
  );
};
