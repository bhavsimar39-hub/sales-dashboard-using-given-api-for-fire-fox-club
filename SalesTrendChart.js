import { Line } from "react-chartjs-2";
import React from "react";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

export default function SalesTrendChart({ data }) {
  const chartData = {
    labels: data.map(d => d.date),
    datasets: [{
      label: "Sales Trend",
      data: data.map(d => d.total),
      fill: false,
      borderColor: "blue",
    }]
  };
  return <Line data={chartData} />;
}
