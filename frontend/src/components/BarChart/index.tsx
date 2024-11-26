import React from 'react';
import './barChart.css';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type BarChartProps = {
  title: string;
  label1: string;
  label2?: string;
  labels: string[];
  data1: number[];
  data2?: number[];
  duration: number;
  delay: number;
  width?: string;
};

const formatStringH3 = (string: string): JSX.Element => {
  return (
    <h3 className="bar-chart__title">
      {string.split('s').map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < string.split('s').length - 1 && (
            <b className="moneyDetail">$</b>
          )}
        </React.Fragment>
      ))}
    </h3>
  );
};

const BarChart: React.FC<BarChartProps> = ({
  title,
  label1,
  label2,
  labels,
  data1,
  data2,
  duration,
  delay,
  width,
}) => {
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
      ...(data2 && label2
        ? [
            {
              label: label2,
              data: data2,
              borderColor: (ctx: any) => {
                const canvas = ctx.chart.canvas;
                const ctx2 = canvas.getContext('2d');
                const gradient = ctx2.createLinearGradient(
                  0,
                  0,
                  canvas.width,
                  0
                );
                gradient.addColorStop(0, '#00E5FF');
                gradient.addColorStop(1, '#00BFFF');
                return gradient;
              },
              fill: false,
              tension: 0.4,
              borderWidth: 3,
              pointRadius: 2,
            },
          ]
        : []),
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: duration,
      delay: delay,
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="BarChartComponent" style={{ width }}>
      {formatStringH3(title)}
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
