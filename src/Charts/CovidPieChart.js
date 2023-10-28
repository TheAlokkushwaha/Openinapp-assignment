import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const CovidPieChart = () => {
  const [covidData, setCovidData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch COVID-19 data from the API
    fetch('https://disease.sh/v3/covid-19/countries')
      .then((response) => response.json())
      .then((data) => {
        const countriesData = data.map((country) => ({
          country: country.country,
          cases: country.cases,
        }));

        setCovidData(countriesData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Prepare data for the pie chart
  const chartData = {
    labels: covidData.map((countryData) => countryData.country),
    datasets: [
      {
        data: covidData.map((countryData) => countryData.cases),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          // Add more colors as needed
        ],
      },
    ],
  };

  // Configure the options to hide the legend
  const chartOptions = {
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
  };

  return (
    <div>
      <h4>COVID-19 Cases by Country</h4>
      <div style={{ width: '52%', margin: 'auto' }}>
        <Pie data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default CovidPieChart;
