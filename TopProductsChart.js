import { Bar } from "react-chartjs-2";
import React from "react";
import { Chart, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function TopProductsChart({ data }) {
  const chartData = {
    labels: data.map(d => d[0]),
    datasets: [{
      label: "Revenue",
      data: data.map(d => d[1].revenue),
      backgroundColor: "#4287f5"
    }]
  };
  return (
    <div style={{maxWidth: 400, margin: "30px auto"}}>
      <h3>Top Products (by Revenue)</h3>
      <Bar data={chartData} />
    </div>
  );
}
