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
  
  export const BarrasOnlyRedes = ({ bdDatos, titulo }) => {
    const data = {
      labels: bdDatos.labels,
      datasets: [
        {
          data: bdDatos.fAbsoluta,
          label: [titulo],
          backgroundColor: getDataColors(50),
          borderColor: getDataColors(),
          borderWidth: 0,
          pointerRadius: 0,
          hoverBackgroundColor: getDataColors(99),
          

        },
      ],
    };

  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
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
            const porcentaje = bdDatos.fPorcentual[index];
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
        width={"100"}
        height={"100"}
        className="px-1"
      />
    );
  };
  