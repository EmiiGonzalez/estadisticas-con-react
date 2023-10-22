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
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend);

export const Barras = ({ edad1, edad2, edad3, edad4 }) => {
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
        label: [
          "Edades"
        ],
        backgroundColor: getDataColors(50),
        borderColor: getDataColors(),
        borderWidth: 1,
      },
    ]
  }

  const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
            labels: {
                usePointStyle: true,
                pointStyle: "circle",
                font: {
                    size: 14,
                    weight: "bold",
                }
            }
        },
    },
    maintainAspectRatio: false,
  }

  return <Bar data={data} options={options} width={"100%"} height={"100%"} />;
};
