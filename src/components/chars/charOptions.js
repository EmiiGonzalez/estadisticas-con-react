import { getDataColors } from "../helpers/getDataColors";

export const data = (data) => {


  return {
    labels: data.labels,
    datasets: [
      {
        data: data.fAbsoluta,
        backgroundColor: getDataColors(50),
        borderColor: getDataColors(),
        hoverBackgroundColor: getDataColors(99),
        hoverOffset: 10,
        borderWidth: 3,
        borderAlign: "center",
        
      },
    ],
  };
};

export const options = {
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
                  size: 20,
                  weight: "bold",
                },
            }
        },
            
    },
    maintainAspectRatio: false,
}
