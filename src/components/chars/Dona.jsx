import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { data } from "./charOptions.js";
import Datalabels from "chartjs-plugin-datalabels";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Datalabels
);

export const Dona = ({ bdDatos }) => {
  const info = data(bdDatos);
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
    <Doughnut
      options={options}
      data={info}
      width={"100%"}
      height={"100%"}
      className="px-1"
    />
  );
};
