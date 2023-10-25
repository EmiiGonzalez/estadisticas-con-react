import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Datalabels from "chartjs-plugin-datalabels";
import { data } from "../chars/charOptions";


ChartJS.register(ArcElement, Tooltip, Legend, Datalabels);

export const Pastel = ({ bdDatos }) => {
  const datos = data(bdDatos);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        fontFamily: "sans-serif",
        labels: {
          usePointStyle: true,
          boxWidth: 100,
          boxHeight: 100,
          padding: 20,
          align: "center",
          pointStyle: "circle",
          color: "white",
          font: {
            size: 15,
            family: "sans-serif",
            weight: "bold",
          },
        },
      },
      datalabels: {
        formatter: (value, ctx) => {
          const index = ctx.dataIndex;
          const porcentaje = bdDatos.fPorcentual[index];
          return `${porcentaje}%`;
        },
        color: "white",
        font: {
          size: 15,
          family: "sans-serif",
          weight: "bold",
        },
      },
    },
    maintainAspectRatio: false,
    display: true,
  };

  return (
    <Pie
      data={datos}
      options={options}
      width={"100%"}
      height={"100%"}
      className=""
    />
  );
};
