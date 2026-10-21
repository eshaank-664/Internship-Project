import React from "react";
import "chart.js/auto";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chart({ data }) {

  // Data for chart
  const chartData = {
    labels: Object.keys(data.monthlyData),

    datasets: [
      {
        label: "Orders Amount",

        data: Object.values(data.monthlyData),

        backgroundColor: [
          "#4CAF50",
          "#2196F3",
          "#FF9800",
          "#9C27B0",
          "#F44336",
          "#00BCD4"
        ],

        borderColor: [
          "#388E3C",
          "#1976D2",
          "#F57C00",
          "#7B1FA2",
          "#D32F2F",
          "#0097A7"
        ],

        borderWidth: 1
      }
    ]
  };

  // Chart options
  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "top"
      },

      title: {
        display: true,
        text: "Monthly Orders Dashboard"
      }
    },

    scales: {
      y: {
        beginAtZero: true,

        title: {
          display: true,
          text: "Order Amount"
        }
      },

      x: {
        title: {
          display: true,
          text: "Months"
        }
      }
    }
  };

  return (
    <div
      style={{
        width: "80%",
        margin: "40px auto",
        padding: "20px",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}
    >
      <h2>Total Orders: {data.totalOrders}</h2>

      <h2>Total Spent: ₹{data.totalSpent}</h2>

      <Bar data={chartData} options={options} />
    </div>
  );
}

export default Chart;