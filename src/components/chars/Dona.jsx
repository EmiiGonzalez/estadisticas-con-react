import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { data, options } from "./charOptions.js";


ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

export const Dona = ( {bdDatos}) => {
    const info = data(bdDatos);
  return <Doughnut options={options} data={info} width={"100%"} height={"100%"}/>;
};
