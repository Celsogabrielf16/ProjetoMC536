import React from "react";
import './lineChart.css'

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type LineChartProps = {
    title: string;
    label1: string;
    label2: string;
    labels: string[];
    data1: number[]
    data2: number[]
}

const formatStringH3 = (string: string): JSX.Element => {
    return <h3 className="line-chart__title">
        {string.split("s").map((part, index) => (
            <React.Fragment key={index}>
            {part}
            {index < string.split("s").length - 1 && <b className="moneyDetail">$</b>}
            </React.Fragment>
      ))}
    </h3>
}

const LineChart: React.FC<LineChartProps> = ({title, label1, label2, labels, data1, data2}) => {
    const data = {
        labels: labels,
        datasets: [
          {
            label: label1,
            data: data1,
            borderColor: (ctx: any) => {
                const canvas = ctx.chart.canvas;
                const ctx2 = canvas.getContext('2d');
                const gradient = ctx2.createLinearGradient(0, 0, canvas.width, 0);
                gradient.addColorStop(0, '#FF6A6A');
                gradient.addColorStop(1, '#FF4D4D');
                return gradient;
              },
            fill: false,
            tension: 0.4,
            borderWidth: 3,
            pointRadius: 2,
          },
          {
            label: label2,
            data: data2,
            borderColor: (ctx: any) => {
                const canvas = ctx.chart.canvas;
                const ctx2 = canvas.getContext('2d');
                const gradient = ctx2.createLinearGradient(0, 0, canvas.width, 0);
                gradient.addColorStop(0, '#00E5FF');
                gradient.addColorStop(1, '#00BFFF');
                return gradient;
              },
            fill: false,
            tension: 0.4,
            borderWidth: 3,
            pointRadius: 2,
          }
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const, 
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
                color: '#6A6A6A',
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
                color: '#6A6A6A',
            },
          },
        }
      };

  return (
    <div className="LineChartComponent">
        {formatStringH3(title)}
        <Line data={data} options={options} />
    </div>
) 
};

export default LineChart;
