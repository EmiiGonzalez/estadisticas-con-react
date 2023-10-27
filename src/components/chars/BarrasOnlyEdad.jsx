import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getDataColors } from "../helpers/getDataColors";
import Datalabels from 'chartjs-plugin-datalabels';
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Datalabels
);

export const BarrasOnlyEdad = ({ edad1, edad2, edad3, edad4 }) => {
  const data = {
    labels: [
      "Edades de 14-25",
      "Edades de 26-40",
      "Edades de 41-55",
      "Edades de 56-99",
    ],
    datasets: [
      {
        data: [
          edad1.totalDeDatos,
          edad2.totalDeDatos,
          edad3.totalDeDatos,
          edad4.totalDeDatos,
        ],
        label: ["Total de datos"],
        backgroundColor: getDataColors(50),
        borderColor: getDataColors(),
        borderWidth: 1,
        hoverBackgroundColor: getDataColors(99),
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        formatter: (value, ctx) => {
          const index = ctx.dataIndex;
          const totalDeDatos = edad1.totalDeDatos + edad2.totalDeDatos + edad3.totalDeDatos + edad4.totalDeDatos;
          const porcentaje = Math.round((data.datasets[0].data[index] / totalDeDatos) * 100);
          return `${porcentaje}%`;
        },
        color: "white",
        font: {
          size: 15,
          family: "sans-serif",
          weight: "bold",
        },
      }
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
    animation: {
      delay: (context) => {
        let delay = 0;
        if (context.type === "data") {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
  };

  return (
    <Bar
      data={data}
      options={options}
      width={"100%"}
      height={"100%"}
      className="px-1"
    />
  );
};
