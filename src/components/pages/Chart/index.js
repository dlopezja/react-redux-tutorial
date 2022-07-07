import { useState } from "react";
import BarChart from "../../charts/BarChart";
import LineChart from "../../charts/LineChart";
import PieChart from "../../charts/PieChart";
import { ChartData } from "../../../utils/data";
import "./styles.css";

export default function Chart() {
  const [chartData, setChartData] = useState({
    labels: ChartData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: ChartData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="chart-container">
    <h1>React Chartjs 2 example</h1>
    <div>
      <BarChart chartData={chartData} />

      <LineChart chartData={chartData} />
      </div>
      <div className="pie-chart">
        <PieChart chartData={chartData} />
      </div>
    </div>
  );
}
