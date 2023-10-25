import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { PolarArea } from 'react-chartjs-2';
  import Datalabels from 'chartjs-plugin-datalabels';
import { data } from './charOptions';
  
  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend, Datalabels);
  
  export const Polo = ({ bdDatos }) => {
    const datos = data(bdDatos);
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          fontFamily: 'sans-serif',
          labels: {
            usePointStyle: true,
            boxWidth: 100,
            boxHeight: 100,
            padding: 20,
            align: 'center',
            pointStyle: 'circle',
            color: 'white',
            font: {
              size: 15,
              family: 'sans-serif',
              weight: 'bold',
            },
          },
        },
        datalabels: {
          formatter: (value, ctx) => {
            const index = ctx.dataIndex;
            const porcentaje = bdDatos.fPorcentual[index];
            return `${porcentaje}%`;
          },
          color: 'white',
          font: {
            size: 15,
            family: 'sans-serif',
            weight: 'bold',
          },
        },
      },
      scales: {
        r: {
          display: false,
        },
      },
      maintainAspectRatio: false,
    };
  
    return (
      <PolarArea data={datos} options={options} width={'100%'} height={'100%'} />
    );
  };
  