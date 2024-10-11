import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import PieChart from "./PieChart";
import { Data } from "../../../utils/chartData";
const Charts = () =>{
   const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: " Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
  return (
   <PieChart chartData={chartData} />
  )
}

export default Charts;