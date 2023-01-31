import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import MetricTimer from "../../models/MetricTimer";
import { BackgroundColor, BorderColor } from './ChartColors';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function PieTime({timers} : {timers : MetricTimer[]}){

  const labels = timers.map(timer => timer.activity)
  const durations = timers.map(timer => timer.duration);

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
          <Pie
            data={data}
            />
        </div>
      );
}