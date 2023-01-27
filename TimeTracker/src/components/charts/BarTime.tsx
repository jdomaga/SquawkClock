import {
    BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,
    Tooltip
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ActiveTimer from "../../models/ActiveTimer";
import { BackgroundColor, BorderColor } from './ChartColors';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


export default function BarTime({timers} : {timers : ActiveTimer[]}){

  const labels = timers.map(timer => timer.activity)
  const durations = timers.map(timer => timer.duration);

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

    const data = {
        labels: labels,
        datasets: [
          {
            label: 'Minutes spent',
            data: durations,
            backgroundColor: BackgroundColor,
            borderColor: BorderColor,
            borderWidth: 1,
          },
        ],
      };
      
      return (
        <div className='w-1/4'>
          <Bar
            data={data}
            options={options}
            />
        </div>
      );
}