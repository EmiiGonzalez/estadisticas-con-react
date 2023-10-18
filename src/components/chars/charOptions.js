import { getDataColors } from "../helpers/getDataColors";

export const data = (data) => {
  return {
    labels: data.labels,
    datasets: [
      {
        data: data.fAbsoluta,
        backgroundColor: getDataColors(50),
        borderColor: getDataColors(),
        borderWidth: 1,
      },
    ],
  };
};

export const options = {
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
