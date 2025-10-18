import { Pie } from "react-chartjs-2";
import React from "react";
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
Chart.register(ArcElement, Tooltip, Legend);

export default function RegionDistributionChart({ data }) {
  const chartData = {
    labels: Object.keys(data),
    datasets: [{
      data: Object.values(data),
      backgroundColor: ["#4287f5", "#f54242", "#42f554", "#f5e642", "#8b42f5"],
    }]
  };
  return (
    <div style={{maxWidth: 400, margin: "30px auto"}}>
      <h3>Sales by Region</h3>
      <Pie data={chartData} />
    </div>
  );
}
