import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from "chart.js";
import { Bar } from "react-chartjs-2";
import MetricTimer from "../../models/MetricTimer";
import { BackgroundColor, BorderColor } from "./ChartColors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarTime({ timers }: { timers: MetricTimer[] }) {
    
  const labels = timers.map((timer) => timer.activity);
  const durations = timers.map((timer) => timer.duration);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Minutes spent",
        data: durations,
        backgroundColor: BackgroundColor,
        borderColor: BorderColor,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-1/2">
      <Bar data={data} options={options} />
    </div>
  );
}
