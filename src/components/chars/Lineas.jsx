import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getDataColors } from "../helpers/getDataColors";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Lineas = ({ bdDatos }) => {
  const data = bdDatos;
  const datos = {
    labels: data.labels,
    datasets: [
      {
        label: "Total de datos",
        data: data.fAbsoluta,
        backgroundColor: getDataColors(50),
        borderColor: getDataColors(),
        hoverBackgroundColor: getDataColors(99),
        hoverOffset: 10,
        borderWidth: 3,
        borderAlign: "center",
        pointRadius: 13,
        pointHoverRadius: 20,
      },
    ],
  };

  const opciones = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        fontFamily: "sans-serif",
        labels: {
          usePointStyle: true,
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
          const porcentaje = data.fPorcentual[index];
          return `${porcentaje}%`;
        },
        color: "white",
        font: {
          size: 13,
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
    animations: {
      tension: {
        duration: 1500,
        easing: "linear",
        from: 0.2,
        to: 0,
        loop: true,
      },
      radius: {
        duration: 400,
        easing: "linear",
        loop: (context) => context.active,
      },
    },
  };

  return (
    <Line
      data={datos}
      width={"100%"}
      height={"100%"}
      className="px-1"
      options={opciones}
    />
  );
};
