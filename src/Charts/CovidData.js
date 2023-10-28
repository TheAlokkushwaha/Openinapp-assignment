import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { CategoryScale, Chart,registerables } from "chart.js";

Chart.register(CategoryScale);
Chart.register(...registerables);

const CovidChart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://disease.sh/v3/covid-19/countries"
        );
        const sortedData = response.data
          .sort((a, b) => b.cases - a.cases) // Sort data by total cases in descending order
          .slice(0, 10); // Select the top 10 countries
        setData(sortedData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const countries = data.map((country) => country.country);
  const totalCases = data.map((country) => country.cases);

  const chartData = {
    labels: countries,
    datasets: [
      {
        label: "Total Cases",
        data: totalCases,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="covid-chart">
      <h4>COVID-19 Total Cases by Country (Top 10)</h4>
      <div style={{ height: "290px", width: "95%" }}>
        <Bar
          data={chartData}
          options={{
            maintainAspectRatio: false,
            scales: {
              x: {
                type: "category", // Use "category" scale for x-axis
              },
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default CovidChart;
