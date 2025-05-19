import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

export default function StatisticsChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        data: [2.5, 4.2, 3.1, 4.5, 5],
        fill: true,
        borderColor: '#3B82F6', // Tailwind's blue-500
        backgroundColor: 'rgba(59, 130, 246, 0.05)',
        tension: 0.5,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#3B82F6',
        pointRadius: 5,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: '#3B82F6',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 1,
        max: 5,
        ticks: {
          stepSize: 1,
          callback: (value) => `${value}M`,
          color: '#94a3b8', 
        },
        grid: {
          display: false,
        },
      },
      x: {
        ticks: {
          color: '#94a3b8',
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => ` ${context.parsed.y}M`,
        },
      },
    },
  };

  return (
    <div className="max-w-[430px] w-full mx-auto bg-white rounded-xl py-4 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-600 font-semibold">Statistics</h2>
        <button className="text-sm text-gray-400">See All</button>
      </div>
      <div className="h-48">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
